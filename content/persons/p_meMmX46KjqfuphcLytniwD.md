---
schema: wang-person/v1
id: p_meMmX46KjqfuphcLytniwD
status: active
merged_into: null
display_name: 王之祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKG4UPE6ynQFSS7xiU3NHy
        subject_person_id: p_meMmX46KjqfuphcLytniwD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NkDALgBgd9Wpfn5SgBc2wL
          claim_id: c_DKG4UPE6ynQFSS7xiU3NHy
          source_id: s_s3SLXB3763worskoe7qK1M
          stance: supports
          locator: CBDB:635805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635805）
          source: &a1
            id: s_s3SLXB3763worskoe7qK1M
            source_type: api_record
            title: 中国历代人物传记资料库：王之祥（CBDB 635805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635805&o=json
            external_identifier: CBDB:635805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TPf1s3hmuNge9VDH94XNmM
        subject_person_id: p_meMmX46KjqfuphcLytniwD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之祥，清人物。籍贯武進，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635805）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Z2pPCYKPEpyZO-nCbTnNE
          claim_id: c_TPf1s3hmuNge9VDH94XNmM
          source_id: s_s3SLXB3763worskoe7qK1M
          stance: supports
          locator: CBDB:635805
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

# 王之祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之祥 | accepted |
| bio.summary | 王之祥，清人物。籍贯武進，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之祥（CBDB 635805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635805&o=json)
