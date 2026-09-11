---
schema: wang-person/v1
id: p_3v5cne961XPZWw9jxgKCdV
status: active
merged_into: null
display_name: 王葆心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VcLt4mW1hyTvkH1N7zuLUz
        subject_person_id: p_3v5cne961XPZWw9jxgKCdV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gEHPPghSZYCYQ1nRwgFwP5
          claim_id: c_VcLt4mW1hyTvkH1N7zuLUz
          source_id: s_CKBwVBqFWp7w7M1GCgxi7C
          stance: supports
          locator: CBDB:72042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72042）
          source: &a1
            id: s_CKBwVBqFWp7w7M1GCgxi7C
            source_type: api_record
            title: 中国历代人物传记资料库：王葆心（CBDB 72042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72042&o=json
            external_identifier: CBDB:72042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dNFp7vMTkL2FsDWqKzaFy4
        subject_person_id: p_3v5cne961XPZWw9jxgKCdV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcKZ3WFB8oKSeticrh5k23
          claim_id: c_dNFp7vMTkL2FsDWqKzaFy4
          source_id: s_CKBwVBqFWp7w7M1GCgxi7C
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
        id: c_3xGAS1QCpNvqGNF3BXBJDE
        subject_person_id: p_3v5cne961XPZWw9jxgKCdV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1944年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzzLUQQQpkrB5taz9AEhoF
          claim_id: c_3xGAS1QCpNvqGNF3BXBJDE
          source_id: s_CKBwVBqFWp7w7M1GCgxi7C
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
        id: c_csi8cchcyaV6fHUyVqbGRj
        subject_person_id: p_3v5cne961XPZWw9jxgKCdV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆心（1868年—1944年），中華民國人物。籍贯羅田。（中国历代人物传记资料库 CBDB 72042）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0fRExidlVUj1G3gf93quo5
          claim_id: c_csi8cchcyaV6fHUyVqbGRj
          source_id: s_CKBwVBqFWp7w7M1GCgxi7C
          stance: supports
          locator: CBDB:72042
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

# 王葆心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆心 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1944年 | accepted |
| bio.summary | 王葆心（1868年—1944年），中華民國人物。籍贯羅田。（中国历代人物传记资料库 CBDB 72042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆心（CBDB 72042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72042&o=json)
