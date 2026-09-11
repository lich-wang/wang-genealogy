---
schema: wang-person/v1
id: p_FsGUcbWrxtTJ5iNV5rJs6W
status: active
merged_into: null
display_name: 王璨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcwNgmv15RPqrx6LgWWYS2
        subject_person_id: p_FsGUcbWrxtTJ5iNV5rJs6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LhEpwd1gRjuRD5h17M6yjU
          claim_id: c_PcwNgmv15RPqrx6LgWWYS2
          source_id: s_M6cbhThWPF53r2R9fAtKVB
          stance: supports
          locator: CBDB:484498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484498）
          source: &a1
            id: s_M6cbhThWPF53r2R9fAtKVB
            source_type: api_record
            title: 中国历代人物传记资料库：王璨（CBDB 484498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484498&o=json
            external_identifier: CBDB:484498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b6XdzNcCHGerPQRV9t4drN
        subject_person_id: p_FsGUcbWrxtTJ5iNV5rJs6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璨，明人物。曾任推官。（中国历代人物传记资料库 CBDB 484498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PuSzAchgcdv1TrTjd31yx2
          claim_id: c_b6XdzNcCHGerPQRV9t4drN
          source_id: s_M6cbhThWPF53r2R9fAtKVB
          stance: supports
          locator: CBDB:484498
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

# 王璨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璨 | accepted |
| bio.summary | 王璨，明人物。曾任推官。（中国历代人物传记资料库 CBDB 484498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璨（CBDB 484498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484498&o=json)
