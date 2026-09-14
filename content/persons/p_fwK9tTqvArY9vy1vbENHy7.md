---
schema: wang-person/v1
id: p_fwK9tTqvArY9vy1vbENHy7
status: active
merged_into: null
display_name: 王達
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9MBuRMJ4hmUHJ7ohfqRPWG
        subject_person_id: p_fwK9tTqvArY9vy1vbENHy7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yMdqBEqwH9YCuRcCLcvJd2
          claim_id: c_9MBuRMJ4hmUHJ7ohfqRPWG
          source_id: s_eLQf26BPdmoGXdkAMFyR4v
          stance: supports
          locator: CBDB:253058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253058）
          source: &a1
            id: s_eLQf26BPdmoGXdkAMFyR4v
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 253058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json
            external_identifier: CBDB:253058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tApuFUD5gWuFRJAsP9p5zq
        subject_person_id: p_fwK9tTqvArY9vy1vbENHy7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R7ne5GSQoZ4u7VTotG11y5
          claim_id: c_tApuFUD5gWuFRJAsP9p5zq
          source_id: s_eLQf26BPdmoGXdkAMFyR4v
          stance: supports
          locator: CBDB:253058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0F0Dhxe3hZjX7OeBz2Gipq
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fwK9tTqvArY9vy1vbENHy7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1_7rPrZ0QUck7H3plQX6TD
          claim_id: c_0F0Dhxe3hZjX7OeBz2Gipq
          source_id: s_9pVETnCeFo6TLKzK_trcud
          stance: supports
          locator: CBDB：兄弟 王進（200041）之父／母 王誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王進 为同胞（CBDB 记「兄」），王進 之父／母即 王達 之父／母。
          source:
            id: s_9pVETnCeFo6TLKzK_trcud
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 253058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json
            external_identifier: CBDB:253058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_khCnb8PLsCY5kwDiuH2tbM
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AuhbYk5tFoKR1TxcqcPWJB
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fwK9tTqvArY9vy1vbENHy7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dnUz7VxCOgQThYfEMsRbsI
          claim_id: c_AuhbYk5tFoKR1TxcqcPWJB
          source_id: s_9pVETnCeFo6TLKzK_trcud
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200041 王進）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9pVETnCeFo6TLKzK_trcud
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 253058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json
            external_identifier: CBDB:253058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dGT7XJPTzH43E2nwtnh2aH
        status: active
        display_name: 王進
        merged_into_person_id: null
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253058） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_khCnb8PLsCY5kwDiuH2tbM | 王誠 | accepted |
| other | p_dGT7XJPTzH43E2nwtnh2aH | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 253058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json)
