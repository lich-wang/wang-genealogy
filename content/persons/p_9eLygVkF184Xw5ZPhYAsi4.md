---
schema: wang-person/v1
id: p_9eLygVkF184Xw5ZPhYAsi4
status: active
merged_into: null
display_name: 王萬程
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2pSRNhBAN8P8EkSCVQL4B
        subject_person_id: p_9eLygVkF184Xw5ZPhYAsi4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RZG91SQYP9J4A7SVvUYqf6
          claim_id: c_T2pSRNhBAN8P8EkSCVQL4B
          source_id: s_ECaM5Qi4M5wExw7JHpXoft
          stance: supports
          locator: CBDB:694172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694172）
          source: &a1
            id: s_ECaM5Qi4M5wExw7JHpXoft
            source_type: api_record
            title: 中国历代人物传记资料库：王萬程（CBDB 694172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694172&o=json
            external_identifier: CBDB:694172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xp636zYsa4jELhPt17wbXV
        subject_person_id: p_9eLygVkF184Xw5ZPhYAsi4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬程，清人物。籍贯海鹽，身份为孝子/孝女，入仕鄉賓。（中国历代人物传记资料库 CBDB 694172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A6ssOnpV5jgKykpLMnf68J
          claim_id: c_xp636zYsa4jELhPt17wbXV
          source_id: s_ECaM5Qi4M5wExw7JHpXoft
          stance: supports
          locator: CBDB:694172
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

# 王萬程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬程 | accepted |
| bio.summary | 王萬程，清人物。籍贯海鹽，身份为孝子/孝女，入仕鄉賓。（中国历代人物传记资料库 CBDB 694172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬程（CBDB 694172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694172&o=json)
