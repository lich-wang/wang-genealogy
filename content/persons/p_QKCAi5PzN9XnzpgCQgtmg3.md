---
schema: wang-person/v1
id: p_QKCAi5PzN9XnzpgCQgtmg3
status: active
merged_into: null
display_name: 王軒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mmJHzPBcsXg5UfAvypBjQ
        subject_person_id: p_QKCAi5PzN9XnzpgCQgtmg3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sGG9WLsQCjjaFM8nM7TYgS
          claim_id: c_9mmJHzPBcsXg5UfAvypBjQ
          source_id: s_DRy5jRGvq8D1j5G9T4U9wh
          stance: supports
          locator: CBDB:71074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71074）
          source: &a1
            id: s_DRy5jRGvq8D1j5G9T4U9wh
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 71074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71074&o=json
            external_identifier: CBDB:71074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ls3UEDEWHGVEaRXhCPSAML
        subject_person_id: p_QKCAi5PzN9XnzpgCQgtmg3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1823年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4NASx2Nq5oRf3BofrpQDfc
          claim_id: c_Ls3UEDEWHGVEaRXhCPSAML
          source_id: s_DRy5jRGvq8D1j5G9T4U9wh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_meGVmaAkrC8qPXcqixG59a
        subject_person_id: p_QKCAi5PzN9XnzpgCQgtmg3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1887年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2A7t7z7XyfWu19iYULbHM
          claim_id: c_meGVmaAkrC8qPXcqixG59a
          source_id: s_DRy5jRGvq8D1j5G9T4U9wh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sEZ1tGRjaJKfgZDSRdXj2n
        subject_person_id: p_QKCAi5PzN9XnzpgCQgtmg3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒（1823年—1887年），清人物。籍贯洪洞。（中国历代人物传记资料库 CBDB 71074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oRaReCsEq_BGEY1MhCZBSA
          claim_id: c_sEZ1tGRjaJKfgZDSRdXj2n
          source_id: s_DRy5jRGvq8D1j5G9T4U9wh
          stance: supports
          locator: CBDB:71074
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

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| birth.date | 1823年 | accepted |
| death.date | 1887年 | accepted |
| bio.summary | 王軒（1823年—1887年），清人物。籍贯洪洞。（中国历代人物传记资料库 CBDB 71074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軒（CBDB 71074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71074&o=json)
