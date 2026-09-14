---
schema: wang-person/v1
id: p_oLGH5VdAkbTAKw9xdBWvfS
status: active
merged_into: null
display_name: 王文暉
cbdb_id: 290012
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BGjwSw7i3yK5xt16YWSZkg
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文暉，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_M6enzGmr8pE9trCFnAZUMd
          claim_id: c_BGjwSw7i3yK5xt16YWSZkg
          source_id: s_8RXRBQ9Cu9xeJ1SAUHSpei
          stance: supports
          locator: CBDB:290012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8RXRBQ9Cu9xeJ1SAUHSpei
            source_type: api_record
            title: 中国历代人物传记资料库：王文暉（CBDB 290012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290012&o=json
            external_identifier: CBDB:290012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5QpTv953d5Q7dWB8YZXBWQ
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_14KURVfVyNDvhj99wbMCLr
          claim_id: c_5QpTv953d5Q7dWB8YZXBWQ
          source_id: s_8RXRBQ9Cu9xeJ1SAUHSpei
          stance: supports
          locator: CBDB:290012
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZeqDGGOnD-gmdKrsSacXIK
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6eIEiFsLWjk8RdULOsir9
          claim_id: c_ZeqDGGOnD-gmdKrsSacXIK
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pjZuWWz5q9b7suKN74HyQM
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 126823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json
            external_identifier: CBDB:126823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EsRDyFvEK3YaUwwwR2A4xp
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_w8ce9vxCLsrI1OdGJVgz9B
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i097l4jzh5sg_pv-YDeUPE
          claim_id: c_w8ce9vxCLsrI1OdGJVgz9B
          source_id: s_TAXShRXHGTAn17kvo6i-ns
          stance: supports
          locator: CBDB：兄弟 王璣（126823）之父／母 王文暉
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑢 与 王璣 为同胞（CBDB 记「弟」），王璣 之父／母即 王瑢 之父／母。
          source:
            id: s_TAXShRXHGTAn17kvo6i-ns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yXHpS1XXTWNEbHqcV5CiM
        status: active
        display_name: 王瑢
        merged_into_person_id: null
    - claim:
        id: c_Rd_9S8Jr6QZWuHEKd9XL9s
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CoMtV9xq2X5pH1y41LjC86
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afpre7lx4k7Acj7UPVi1-e
          claim_id: c_Rd_9S8Jr6QZWuHEKd9XL9s
          source_id: s_0H_tCdT1Zmredb0Jk2qtew
          stance: supports
          locator: CBDB：兄弟 王璣（126823）之父／母 王文暉
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王璣 为同胞（CBDB 记「弟」），王璣 之父／母即 王瓊 之父／母。
          source:
            id: s_0H_tCdT1Zmredb0Jk2qtew
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 290017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json
            external_identifier: CBDB:290017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CoMtV9xq2X5pH1y41LjC86
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文暉，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290012） | accepted |
| name.primary | 王文暉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EsRDyFvEK3YaUwwwR2A4xp | 王璣 | accepted |
| children | p_8yXHpS1XXTWNEbHqcV5CiM | 王瑢 | accepted |
| children | p_CoMtV9xq2X5pH1y41LjC86 | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 126823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 290017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json)
- [中国历代人物传记资料库：王瑢（CBDB 290018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json)
- [中国历代人物传记资料库：王文暉（CBDB 290012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290012&o=json)
