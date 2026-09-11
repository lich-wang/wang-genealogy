---
schema: wang-person/v1
id: p_D7uWC42VbNHCFw7UkWxQfj
status: active
merged_into: null
display_name: 王爽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4YS3sQP5rRhYwEoq7q6VnK
        subject_person_id: p_D7uWC42VbNHCFw7UkWxQfj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AN5syjekYAR1L9MBkL1d19
          claim_id: c_4YS3sQP5rRhYwEoq7q6VnK
          source_id: s_pdjzwFoXoop2uHcYmmLLi9
          stance: supports
          locator: CBDB:118695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118695）
          source: &a1
            id: s_pdjzwFoXoop2uHcYmmLLi9
            source_type: api_record
            title: 中国历代人物传记资料库：王爽（CBDB 118695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118695&o=json
            external_identifier: CBDB:118695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAixqUwH9itTGbJB9gGhAt
        subject_person_id: p_D7uWC42VbNHCFw7UkWxQfj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爽，史料所见人物。本项目依据《中国历代人物传记资料库：王爽（CBDB 118695）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mXVV1cUhDjQdiY0ZRhK57o
          claim_id: c_kAixqUwH9itTGbJB9gGhAt
          source_id: s_pdjzwFoXoop2uHcYmmLLi9
          stance: supports
          locator: CBDB:118695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Qw6RMXKUZlz9Yqkp7VUeeN
        subject_person_id: p_D7uWC42VbNHCFw7UkWxQfj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nhkQsMYLcLyuoAVr7orqQN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yVaqfasv8N-UQLYdUSODxc
          claim_id: c_Qw6RMXKUZlz9Yqkp7VUeeN
          source_id: s_krvWLQ4g9xV8KcUPx8Dk1y
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2262, HuWenKai #256：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_krvWLQ4g9xV8KcUPx8Dk1y
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 118694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118694&o=json
            external_identifier: CBDB:118694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nhkQsMYLcLyuoAVr7orqQN
        status: active
        display_name: 王璿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爽 | accepted |
| bio.summary | 王爽，史料所见人物。本项目依据《中国历代人物传记资料库：王爽（CBDB 118695）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nhkQsMYLcLyuoAVr7orqQN | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爽（CBDB 118695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118695&o=json)
- [中国历代人物传记资料库：王璿（CBDB 118694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118694&o=json)
