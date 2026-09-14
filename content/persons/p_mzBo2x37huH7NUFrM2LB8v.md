---
schema: wang-person/v1
id: p_mzBo2x37huH7NUFrM2LB8v
status: active
merged_into: null
display_name: 王安
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmeHVebELrHpySsz1Xy4hN
        subject_person_id: p_mzBo2x37huH7NUFrM2LB8v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKdN7YQCjLrpGJFsH3452q
          claim_id: c_BmeHVebELrHpySsz1Xy4hN
          source_id: s_DzJB6kFU1Gp5Ts5BQtYCsF
          stance: supports
          locator: CBDB:249821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249821）
          source: &a1
            id: s_DzJB6kFU1Gp5Ts5BQtYCsF
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 249821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json
            external_identifier: CBDB:249821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_opfSsUAVXD8t7v71RQEngf
        subject_person_id: p_mzBo2x37huH7NUFrM2LB8v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5dLxUPK-_tkb6LAw8tyI15
          claim_id: c_opfSsUAVXD8t7v71RQEngf
          source_id: s_DzJB6kFU1Gp5Ts5BQtYCsF
          stance: supports
          locator: CBDB:249821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_we1VcwfV2KACLUKrAIKpnb
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzBo2x37huH7NUFrM2LB8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O3poONKsWn8vpBG5JMyIB3
          claim_id: c_we1VcwfV2KACLUKrAIKpnb
          source_id: s_x4AXeL5H1T9QcTQs60s1Rb
          stance: supports
          locator: CBDB：兄弟 王嵩（126762）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王安 与 王嵩 为同胞（CBDB 记「弟」），王嵩 之父／母即 王安 之父／母。
          source:
            id: s_x4AXeL5H1T9QcTQs60s1Rb
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 249821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json
            external_identifier: CBDB:249821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_219jQxSbAi8XEaLPFhzHTg
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-2uQ1TmLqeX7-cT0q6IIaR
        subject_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mzBo2x37huH7NUFrM2LB8v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K5jx4pU3ceYI3QLDXr6H5m
          claim_id: c_-2uQ1TmLqeX7-cT0q6IIaR
          source_id: s_x4AXeL5H1T9QcTQs60s1Rb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126762 王嵩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x4AXeL5H1T9QcTQs60s1Rb
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 249821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json
            external_identifier: CBDB:249821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3QDnXJ1yrE5aSbLLXiVLND
        status: active
        display_name: 王嵩
        merged_into_person_id: null
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。成化十一年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 249821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_219jQxSbAi8XEaLPFhzHTg | 王信 | accepted |
| other | p_3QDnXJ1yrE5aSbLLXiVLND | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 249821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249821&o=json)
