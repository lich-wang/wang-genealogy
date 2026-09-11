---
schema: wang-person/v1
id: p_v69Td9WgQsQEiis6TK34mC
status: active
merged_into: null
display_name: 王孝感
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ezdm7cLLbKxiq4Nxw1iCGF
        subject_person_id: p_v69Td9WgQsQEiis6TK34mC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LqP55PL7uFZYtpnJ7EDhZP
          claim_id: c_ezdm7cLLbKxiq4Nxw1iCGF
          source_id: s_m3pb1Wv11i7rJRXdhdkrar
          stance: supports
          locator: CBDB:694261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694261）
          source: &a1
            id: s_m3pb1Wv11i7rJRXdhdkrar
            source_type: api_record
            title: 中国历代人物传记资料库：王孝感（CBDB 694261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694261&o=json
            external_identifier: CBDB:694261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PzEZdCXFZmFEJUgzZXQc6Y
        subject_person_id: p_v69Td9WgQsQEiis6TK34mC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝感，清人物。籍贯鄞縣，身份为義民/義官。（中国历代人物传记资料库 CBDB 694261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i8LQXDeiHscijzEg9K4EeH
          claim_id: c_PzEZdCXFZmFEJUgzZXQc6Y
          source_id: s_m3pb1Wv11i7rJRXdhdkrar
          stance: supports
          locator: CBDB:694261
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

# 王孝感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝感 | accepted |
| bio.summary | 王孝感，清人物。籍贯鄞縣，身份为義民/義官。（中国历代人物传记资料库 CBDB 694261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝感（CBDB 694261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694261&o=json)
