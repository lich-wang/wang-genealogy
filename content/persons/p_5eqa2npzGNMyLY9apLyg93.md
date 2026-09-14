---
schema: wang-person/v1
id: p_5eqa2npzGNMyLY9apLyg93
status: active
merged_into: null
display_name: 王儼
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4v7QJERJpKH5phFs7F3fZ
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWBg8EFWXazpnnE14pdUMZ
          claim_id: c_L4v7QJERJpKH5phFs7F3fZ
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: CBDB:126890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126890）
          source: &a1
            id: s_xSNFJ3uVoBPhNYenKBXfEa
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json
            external_identifier: CBDB:126890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y92gsUSQEusvA6ABc4srKE
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。明清進士進士，籍贯威遠，入仕進士，曾任縣令、刑部主事。（中国历代人物传记资料库 CBDB 126890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3DM_AKGYUuj8484jUbw46Q
          claim_id: c_y92gsUSQEusvA6ABc4srKE
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: CBDB:126890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OCDjAB-aidEk6RHxlWc8yd
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6m28Zbg3SGKoaGU2ybAsIu
          claim_id: c_OCDjAB-aidEk6RHxlWc8yd
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xaFW5n3rj8bBX5K7DicMLs
        status: active
        display_name: 王三成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VhWg_64uu00jjaWtRNG0PV
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8C6sytTQSRKy1JrArNBF7Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sU4iidrFb9bWJT6n9sQQxI
          claim_id: c_VhWg_64uu00jjaWtRNG0PV
          source_id: s_RIyKYLZnDlqkwFPda6YkAa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RIyKYLZnDlqkwFPda6YkAa
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王儼妻)（CBDB 336836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336836&o=json
            external_identifier: CBDB:336836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8C6sytTQSRKy1JrArNBF7Y
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HTE-V5tc7jMrmxfNQH0RfL
        subject_person_id: p_CiQUwAvRuDMT5yXpH3NMmL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUQs-9crxmxXIP3KRxLDVP
          claim_id: c_HTE-V5tc7jMrmxfNQH0RfL
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CiQUwAvRuDMT5yXpH3NMmL
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_j2wYeTubmCAP4GuWNkZYRJ
        subject_person_id: p_GXyYh4gFZuBGtFJXmM8AQz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0NJ2hM6zya5fMnF5tdn_MG
          claim_id: c_j2wYeTubmCAP4GuWNkZYRJ
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GXyYh4gFZuBGtFJXmM8AQz
        status: active
        display_name: 王孝
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_tftpJLBikfzUHtBPB9-s-c
        subject_person_id: p_1Yo2nzrqQ3N54kfTVyv48e
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Umjbw9wdj8FGsHSvBRZei
          claim_id: c_tftpJLBikfzUHtBPB9-s-c
          source_id: s_QDmNtAj7uARtQpldfUER4Y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QDmNtAj7uARtQpldfUER4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 336840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336840&o=json
            external_identifier: CBDB:336840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Yo2nzrqQ3N54kfTVyv48e
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_nfT2SxV4R-p8oXdniI-IPT
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_883HuZzfrY39nQAkGjHotG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TR5xRw94PBTSg6Y24we00S
          claim_id: c_nfT2SxV4R-p8oXdniI-IPT
          source_id: s_HczFL3GdmdLYvm3J52Osmm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HczFL3GdmdLYvm3J52Osmm
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 336841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json
            external_identifier: CBDB:336841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_883HuZzfrY39nQAkGjHotG
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_Sn-H1hoWZbaYtOA7iHIhgx
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7Fw6RaSvNU1mzgUdwBkBh
          claim_id: c_Sn-H1hoWZbaYtOA7iHIhgx
          source_id: s_T-fyAVt6zYKdjAfw_5r7bA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T-fyAVt6zYKdjAfw_5r7bA
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 336837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json
            external_identifier: CBDB:336837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9f7LwUCdiNQAQe2eHYVGCE
        status: active
        display_name: 王脩
        merged_into_person_id: null
    - claim:
        id: c_MdAi60aOeumaUmUZCJNWCS
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iKkGwo1BEgZB8jBJaojSa4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iexJBElKZEkP_gVGkqp1Ej
          claim_id: c_MdAi60aOeumaUmUZCJNWCS
          source_id: s_sWQYa4v0ZpajJPwxNlTwMG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sWQYa4v0ZpajJPwxNlTwMG
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 336839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336839&o=json
            external_identifier: CBDB:336839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKkGwo1BEgZB8jBJaojSa4
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_V_qL2QhOqTuYFHVK1qPFbo
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yYvkPN2uXCs332sp1CZGEJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SE9EPBTdOfNT0x5Kt9YrR1
          claim_id: c_V_qL2QhOqTuYFHVK1qPFbo
          source_id: s_4qrs2EiYIZzR5KkZdJnCwz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4qrs2EiYIZzR5KkZdJnCwz
            source_type: api_record
            title: 中国历代人物传记资料库：王伊（CBDB 336838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336838&o=json
            external_identifier: CBDB:336838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yYvkPN2uXCs332sp1CZGEJ
        status: active
        display_name: 王伊
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。明清進士進士，籍贯威遠，入仕進士，曾任縣令、刑部主事。（中国历代人物传记资料库 CBDB 126890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xaFW5n3rj8bBX5K7DicMLs | 王三成 | accepted |
| spouses | p_8C6sytTQSRKy1JrArNBF7Y | 李氏 | accepted |
| ancestors | p_CiQUwAvRuDMT5yXpH3NMmL | 王濬 | accepted |
| ancestors | p_GXyYh4gFZuBGtFJXmM8AQz | 王孝 | accepted |
| other | p_1Yo2nzrqQ3N54kfTVyv48e | 王偉 | accepted |
| other | p_883HuZzfrY39nQAkGjHotG | 王俊 | accepted |
| other | p_9f7LwUCdiNQAQe2eHYVGCE | 王脩 | accepted |
| other | p_iKkGwo1BEgZB8jBJaojSa4 | 王倫 | accepted |
| other | p_yYvkPN2uXCs332sp1CZGEJ | 王伊 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王儼妻)（CBDB 336836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336836&o=json)
- [中国历代人物传记资料库：王俊（CBDB 336841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json)
- [中国历代人物传记资料库：王倫（CBDB 336839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336839&o=json)
- [中国历代人物传记资料库：王偉（CBDB 336840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336840&o=json)
- [中国历代人物传记资料库：王脩（CBDB 336837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json)
- [中国历代人物传记资料库：王伊（CBDB 336838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336838&o=json)
