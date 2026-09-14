---
schema: wang-person/v1
id: p_DJ2KcaAHzhLQmf8pwZEnfS
status: active
merged_into: null
display_name: 王純
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BD6BDFHceC5yNnGkBeJm7A
        subject_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nDVx4AgtWsmcqjWbQk5uzq
          claim_id: c_BD6BDFHceC5yNnGkBeJm7A
          source_id: s_535yTm15sSyJD2CFNw2BNv
          stance: supports
          locator: CBDB:292180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292180）
          source: &a1
            id: s_535yTm15sSyJD2CFNw2BNv
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 292180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json
            external_identifier: CBDB:292180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_96JhEYcVZ5DkJ6uYgaMF7E
        subject_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fIoH3HMMuZx3JOuA6rRgCG
          claim_id: c_96JhEYcVZ5DkJ6uYgaMF7E
          source_id: s_535yTm15sSyJD2CFNw2BNv
          stance: supports
          locator: CBDB:292180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-tlj122DKy8yLM6JKJC5Gu
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-5eetLECbGaW30ukcTvhmp
          claim_id: c_-tlj122DKy8yLM6JKJC5Gu
          source_id: s_OSOarZpHHBujuVAZ0DTLB0
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王純 之父／母。
          source:
            id: s_OSOarZpHHBujuVAZ0DTLB0
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 292180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json
            external_identifier: CBDB:292180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1VDAXUuIm3tCDRHnvdbzZb
        subject_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KIpqaEgB5Rpwv_QT1-0i_s
          claim_id: c_1VDAXUuIm3tCDRHnvdbzZb
          source_id: s_OSOarZpHHBujuVAZ0DTLB0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OSOarZpHHBujuVAZ0DTLB0
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 292180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json
            external_identifier: CBDB:292180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 292180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json)
