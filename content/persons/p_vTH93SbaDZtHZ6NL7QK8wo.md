---
schema: wang-person/v1
id: p_vTH93SbaDZtHZ6NL7QK8wo
status: active
merged_into: null
display_name: 王曜鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eyrE5P6Cq1taUF4sFw83Eb
        subject_person_id: p_vTH93SbaDZtHZ6NL7QK8wo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QuVKGjVaUg7TBzXgB7ba3B
          claim_id: c_eyrE5P6Cq1taUF4sFw83Eb
          source_id: s_NFjwEaMUPMsXPHJHuwKx1T
          stance: supports
          locator: CBDB:638526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638526）
          source: &a1
            id: s_NFjwEaMUPMsXPHJHuwKx1T
            source_type: api_record
            title: 中国历代人物传记资料库：王曜鑾（CBDB 638526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638526&o=json
            external_identifier: CBDB:638526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4g4U1EniC6eibRsbNTpnfV
        subject_person_id: p_vTH93SbaDZtHZ6NL7QK8wo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜鑾，清人物。籍贯湘鄉，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9dSEyJ31oFutkuRuiQ3RY
          claim_id: c_4g4U1EniC6eibRsbNTpnfV
          source_id: s_NFjwEaMUPMsXPHJHuwKx1T
          stance: supports
          locator: CBDB:638526
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

# 王曜鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曜鑾 | accepted |
| bio.summary | 王曜鑾，清人物。籍贯湘鄉，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曜鑾（CBDB 638526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638526&o=json)
