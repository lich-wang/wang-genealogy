---
schema: wang-person/v1
id: p_2DLBJkj3Sn3Fom74yXP8F9
status: active
merged_into: null
display_name: 王常住
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSFut3vCAQhkgJ6gomg4Gy
        subject_person_id: p_2DLBJkj3Sn3Fom74yXP8F9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常住
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XE3LAXjwBz77rWNAB4Yj9G
          claim_id: c_dSFut3vCAQhkgJ6gomg4Gy
          source_id: s_gAZm2ABqixLUybqA3GHk5b
          stance: supports
          locator: CBDB:683948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683948）
          source: &a1
            id: s_gAZm2ABqixLUybqA3GHk5b
            source_type: api_record
            title: 中国历代人物传记资料库：王常住（CBDB 683948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683948&o=json
            external_identifier: CBDB:683948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hpugVuRodQ764N9BFVpSxb
        subject_person_id: p_2DLBJkj3Sn3Fom74yXP8F9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常住，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683948）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_78fWWYsHs9G65eueVEOs96
          claim_id: c_hpugVuRodQ764N9BFVpSxb
          source_id: s_gAZm2ABqixLUybqA3GHk5b
          stance: supports
          locator: CBDB:683948
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

# 王常住

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常住 | accepted |
| bio.summary | 王常住，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王常住（CBDB 683948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683948&o=json)
