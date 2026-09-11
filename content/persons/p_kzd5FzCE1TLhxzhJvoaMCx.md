---
schema: wang-person/v1
id: p_kzd5FzCE1TLhxzhJvoaMCx
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKz4Ps8MCw82DG3VxBVpAK
        subject_person_id: p_kzd5FzCE1TLhxzhJvoaMCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgThHgMHjjk6DkNvRC2LTp
          claim_id: c_GKz4Ps8MCw82DG3VxBVpAK
          source_id: s_8ZwXe91avL9nW3MP1VpLZi
          stance: supports
          locator: CBDB:488213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488213）
          source: &a1
            id: s_8ZwXe91avL9nW3MP1VpLZi
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 488213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488213&o=json
            external_identifier: CBDB:488213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fpro7dobikVoJEmBP7rB81
        subject_person_id: p_kzd5FzCE1TLhxzhJvoaMCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，明人物。曾任知府。（中国历代人物传记资料库 CBDB 488213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_17IY6r3bjrY7i6n47jIsGs
          claim_id: c_Fpro7dobikVoJEmBP7rB81
          source_id: s_8ZwXe91avL9nW3MP1VpLZi
          stance: supports
          locator: CBDB:488213
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，明人物。曾任知府。（中国历代人物传记资料库 CBDB 488213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 488213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488213&o=json)
