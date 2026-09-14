---
schema: wang-person/v1
id: p_2e1xDrBQLLaowuNAJfVekM
status: active
merged_into: null
display_name: 王侃
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1HYJ6q84zJRKPxeQy5vBK
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NWN9UdCWiDDjbNAZ9Eb59
          claim_id: c_W1HYJ6q84zJRKPxeQy5vBK
          source_id: s_3AJw2awTH9qV2cQLm2JUoQ
          stance: supports
          locator: CBDB:236835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236835）
          source: &a1
            id: s_3AJw2awTH9qV2cQLm2JUoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nMor3Z9iAZDery35RekQBS
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U7zg8mrNKslte7PCePdNZl
          claim_id: c_nMor3Z9iAZDery35RekQBS
          source_id: s_3AJw2awTH9qV2cQLm2JUoQ
          stance: supports
          locator: CBDB:236835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hEn7qpvNibFyyQ2sS3Ha2F
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2e1xDrBQLLaowuNAJfVekM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SW39hUr5K7IFRMG2U_hB0I
          claim_id: c_hEn7qpvNibFyyQ2sS3Ha2F
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王侃 之父／母。
          source:
            id: s_rH46g1QQ7YVcDcyZX-S70T
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m3sqs8vR54qKPT7T_KvObD
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fd0Dfq-FgmOAeYnjN6YHw9
          claim_id: c_m3sqs8vR54qKPT7T_KvObD
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rH46g1QQ7YVcDcyZX-S70T
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_l_0W4Z3tRveeea54VDwCRb
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWWs-uyo3EfBMCxqCT63yR
          claim_id: c_l_0W4Z3tRveeea54VDwCRb
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rH46g1QQ7YVcDcyZX-S70T
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |
| other | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 236835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json)
