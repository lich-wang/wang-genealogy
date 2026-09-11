---
schema: wang-person/v1
id: p_QQx7NmxdKaHR4AB9tWRvtN
status: active
merged_into: null
display_name: 王仕甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gDXPPSPA9qTrkxwaM6CHJa
        subject_person_id: p_QQx7NmxdKaHR4AB9tWRvtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8qN6A8oB3JN9okwZPVQf25
          claim_id: c_gDXPPSPA9qTrkxwaM6CHJa
          source_id: s_fwBoiMbNrEk2Y4jKei9DfP
          stance: supports
          locator: CBDB:536765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536765）
          source: &a1
            id: s_fwBoiMbNrEk2Y4jKei9DfP
            source_type: api_record
            title: 中国历代人物传记资料库：王仕甫（CBDB 536765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536765&o=json
            external_identifier: CBDB:536765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wveM9pHHKZQvvMAhrFR3b6
        subject_person_id: p_QQx7NmxdKaHR4AB9tWRvtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕甫，宋人物。籍贯隆興府，入仕進士。（中国历代人物传记资料库 CBDB 536765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_djbHO1fnhT207d9az7HP-B
          claim_id: c_wveM9pHHKZQvvMAhrFR3b6
          source_id: s_fwBoiMbNrEk2Y4jKei9DfP
          stance: supports
          locator: CBDB:536765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仕甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕甫 | accepted |
| bio.summary | 王仕甫，宋人物。籍贯隆興府，入仕進士。（中国历代人物传记资料库 CBDB 536765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕甫（CBDB 536765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536765&o=json)
