---
schema: wang-person/v1
id: p_ZkJNxeEM8QA7NgAjfJR6R2
status: active
merged_into: null
display_name: 王慶堦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qE5p3Hqge5wuKNjv7QFMHv
        subject_person_id: p_ZkJNxeEM8QA7NgAjfJR6R2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶堦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6owryG1jLvLv4rZT9ya2AG
          claim_id: c_qE5p3Hqge5wuKNjv7QFMHv
          source_id: s_UU2zU6b3s9jNaRZrcm6gD4
          stance: supports
          locator: CBDB:637927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637927）
          source: &a1
            id: s_UU2zU6b3s9jNaRZrcm6gD4
            source_type: api_record
            title: 中国历代人物传记资料库：王慶堦（CBDB 637927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637927&o=json
            external_identifier: CBDB:637927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V1wVpsFMX1JCcUALHGKLRQ
        subject_person_id: p_ZkJNxeEM8QA7NgAjfJR6R2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶堦，清人物。籍贯東昌府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637927）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7OrDWXO5jhEU6gJZ2y94Yw
          claim_id: c_V1wVpsFMX1JCcUALHGKLRQ
          source_id: s_UU2zU6b3s9jNaRZrcm6gD4
          stance: supports
          locator: CBDB:637927
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

# 王慶堦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶堦 | accepted |
| bio.summary | 王慶堦，清人物。籍贯東昌府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶堦（CBDB 637927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637927&o=json)
