---
schema: wang-person/v1
id: p_aSNfGfKuuBLxhMh6g83KDR
status: active
merged_into: null
display_name: 王鳳標
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ptpx76HGGCz4294CRKh5VW
        subject_person_id: p_aSNfGfKuuBLxhMh6g83KDR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPXNFZ2rmzCLARBxHUFVUv
          claim_id: c_ptpx76HGGCz4294CRKh5VW
          source_id: s_5fRXmrfL7FZA5bP3LPSz3j
          stance: supports
          locator: CBDB:640960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640960）
          source: &a1
            id: s_5fRXmrfL7FZA5bP3LPSz3j
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳標（CBDB 640960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640960&o=json
            external_identifier: CBDB:640960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CR2mJb1vHACnka16vLZ5V6
        subject_person_id: p_aSNfGfKuuBLxhMh6g83KDR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳標，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640960）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bzdf8D3uomP9hTUMj4-Z3k
          claim_id: c_CR2mJb1vHACnka16vLZ5V6
          source_id: s_5fRXmrfL7FZA5bP3LPSz3j
          stance: supports
          locator: CBDB:640960
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

# 王鳳標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳標 | accepted |
| bio.summary | 王鳳標，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳標（CBDB 640960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640960&o=json)
