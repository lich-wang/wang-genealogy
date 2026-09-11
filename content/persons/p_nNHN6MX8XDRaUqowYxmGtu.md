---
schema: wang-person/v1
id: p_nNHN6MX8XDRaUqowYxmGtu
status: active
merged_into: null
display_name: 王鸞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bkQ3QryiZF4f3FNbWLGkv3
        subject_person_id: p_nNHN6MX8XDRaUqowYxmGtu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oBnuNwupNQE39AzCj9mf8F
          claim_id: c_bkQ3QryiZF4f3FNbWLGkv3
          source_id: s_icVnrBZqfn1PSRDx89PQ1Z
          stance: supports
          locator: CBDB:487883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487883）
          source: &a1
            id: s_icVnrBZqfn1PSRDx89PQ1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 487883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487883&o=json
            external_identifier: CBDB:487883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AGHYT9sxLv9A8YunuQkMw8
        subject_person_id: p_nNHN6MX8XDRaUqowYxmGtu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鸞，清人物。入仕科舉制舉: 武舉科。（中国历代人物传记资料库 CBDB 487883）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y2pnMoQoKG-YWHpCY4D083
          claim_id: c_AGHYT9sxLv9A8YunuQkMw8
          source_id: s_icVnrBZqfn1PSRDx89PQ1Z
          stance: supports
          locator: CBDB:487883
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

# 王鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鸞 | accepted |
| bio.summary | 王鸞，清人物。入仕科舉制舉: 武舉科。（中国历代人物传记资料库 CBDB 487883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鸞（CBDB 487883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487883&o=json)
