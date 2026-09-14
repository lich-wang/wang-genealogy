---
schema: wang-person/v1
id: p_rPERXxEMwZa9gPH43DGT1J
status: active
merged_into: null
display_name: 王肅
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_toLa8BFi2WpwzJRJ8GSXGJ
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMhQYqqo53CcssUHWDtjXV
          claim_id: c_toLa8BFi2WpwzJRJ8GSXGJ
          source_id: s_wz7EFPCRRGfRgq97om172U
          stance: supports
          locator: CBDB:199546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199546）
          source: &a1
            id: s_wz7EFPCRRGfRgq97om172U
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 199546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199546&o=json
            external_identifier: CBDB:199546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HhwH28EYiHCezqup6eQMHE
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8APdwFAj67hW435Y4T7zh
          claim_id: c_HhwH28EYiHCezqup6eQMHE
          source_id: s_wz7EFPCRRGfRgq97om172U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QZp6ZcqHmMGfZMPV2bCH2r
        subject_person_id: p_rPERXxEMwZa9gPH43DGT1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅（生于1436年），明人物。明清進士進士，籍贯新喻，入仕進士。（中国历代人物传记资料库 CBDB 199546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G59RX-7hugbcYU2oifRASO
          claim_id: c_QZp6ZcqHmMGfZMPV2bCH2r
          source_id: s_wz7EFPCRRGfRgq97om172U
          stance: supports
          locator: CBDB:199546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cxDOCbbkM3bEazaRzkfyMe
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbrc2i2A4IhKeeFDXTPAIk
          claim_id: c_cxDOCbbkM3bEazaRzkfyMe
          source_id: s_deu4FzrUv1LXSJhSzK1Jy6
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_deu4FzrUv1LXSJhSzK1Jy6
            source_type: api_record
            title: 中国历代人物传记资料库：王同德（CBDB 246479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json
            external_identifier: CBDB:246479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xBigkvdUU97a4F86QBCjb
        status: active
        display_name: 王同德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
        subject_person_id: p_eNfmXWwQAqx11jVRqVFu7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Gwb0R9bNH-U8D_Nt9bdxF
          claim_id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
          source_id: s_J7ASRzcFbLcmHLjfSY2GFC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J7ASRzcFbLcmHLjfSY2GFC
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 246477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json
            external_identifier: CBDB:246477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eNfmXWwQAqx11jVRqVFu7o
        status: active
        display_name: 王中立
        merged_into_person_id: null
    - claim:
        id: c_pHBtH7Z12nRA_eIe5_sjJR
        subject_person_id: p_h1avz726BoZSKsSMLgnMDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hLJF4WUHCCnaO3IaKlGOFz
          claim_id: c_pHBtH7Z12nRA_eIe5_sjJR
          source_id: s_A4BUT23o7VSW5KVo1Ta4AR
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A4BUT23o7VSW5KVo1Ta4AR
            source_type: api_record
            title: 中国历代人物传记资料库：王和義（CBDB 246478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246478&o=json
            external_identifier: CBDB:246478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_h1avz726BoZSKsSMLgnMDe
        status: active
        display_name: 王和義
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Ldoc4SR7dAnUDRxOMv3hsE
        subject_person_id: p_36UQZWrdT25C4yUb3cSCtV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhBtfd3-2nGx9BzllGc2oN
          claim_id: c_Ldoc4SR7dAnUDRxOMv3hsE
          source_id: s_X6_l1g3JSOL4V7CUwzpaNz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X6_l1g3JSOL4V7CUwzpaNz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 246483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json
            external_identifier: CBDB:246483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_36UQZWrdT25C4yUb3cSCtV
        status: active
        display_name: 王崇信
        merged_into_person_id: null
    - claim:
        id: c_HVAYAWpCxSpA2YtfZ56a84
        subject_person_id: p_AcD8rLBCCjpZ5E8dG4nLKD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjuI0Buwh8G1DKIUofueLE
          claim_id: c_HVAYAWpCxSpA2YtfZ56a84
          source_id: s_cnqCn_i-YipwR57k0UG3K8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cnqCn_i-YipwR57k0UG3K8
            source_type: api_record
            title: 中国历代人物传记资料库：王崇惠（CBDB 246485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json
            external_identifier: CBDB:246485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AcD8rLBCCjpZ5E8dG4nLKD
        status: active
        display_name: 王崇惠
        merged_into_person_id: null
    - claim:
        id: c_kNo_8R40tZ6r7cdK2p237a
        subject_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IDwWXOUWBH9D4UU9Tepy2t
          claim_id: c_kNo_8R40tZ6r7cdK2p237a
          source_id: s_m7HfIK5pOLf3dBfEnQ8IH3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m7HfIK5pOLf3dBfEnQ8IH3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇寬（CBDB 246482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json
            external_identifier: CBDB:246482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LEQpdJpHPhjPpitoCFFp8Q
        status: active
        display_name: 王崇寬
        merged_into_person_id: null
    - claim:
        id: c_fG-EkbzP1Dx8N8--4fsTKQ
        subject_person_id: p_eh39zdRgSvpNWuD7pQeAwH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTSUcSSp9JDwxh7Vj1UPlp
          claim_id: c_fG-EkbzP1Dx8N8--4fsTKQ
          source_id: s_fgo5ZGCDBXYgaNNBcItKso
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fgo5ZGCDBXYgaNNBcItKso
            source_type: api_record
            title: 中国历代人物传记资料库：王崇敏（CBDB 246484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246484&o=json
            external_identifier: CBDB:246484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eh39zdRgSvpNWuD7pQeAwH
        status: active
        display_name: 王崇敏
        merged_into_person_id: null
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | 王肅（生于1436年），明人物。明清進士進士，籍贯新喻，入仕進士。（中国历代人物传记资料库 CBDB 199546） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2xBigkvdUU97a4F86QBCjb | 王同德 | accepted |
| ancestors | p_eNfmXWwQAqx11jVRqVFu7o | 王中立 | accepted |
| ancestors | p_h1avz726BoZSKsSMLgnMDe | 王和義 | accepted |
| other | p_36UQZWrdT25C4yUb3cSCtV | 王崇信 | accepted |
| other | p_AcD8rLBCCjpZ5E8dG4nLKD | 王崇惠 | accepted |
| other | p_LEQpdJpHPhjPpitoCFFp8Q | 王崇寬 | accepted |
| other | p_eh39zdRgSvpNWuD7pQeAwH | 王崇敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇惠（CBDB 246485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json)
- [中国历代人物传记资料库：王崇寬（CBDB 246482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json)
- [中国历代人物传记资料库：王崇敏（CBDB 246484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246484&o=json)
- [中国历代人物传记资料库：王崇信（CBDB 246483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json)
- [中国历代人物传记资料库：王和義（CBDB 246478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246478&o=json)
- [中国历代人物传记资料库：王肅（CBDB 199546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199546&o=json)
- [中国历代人物传记资料库：王同德（CBDB 246479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json)
- [中国历代人物传记资料库：王中立（CBDB 246477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json)
