---
schema: wang-person/v1
id: p_FniToytG63bwq4RGgir5qd
status: active
merged_into: null
display_name: 王仲强
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UjgT28DF87AAJFhHq5hYmC
        subject_person_id: p_FniToytG63bwq4RGgir5qd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲强
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7whDzradWYAMjbJpHoaWt
          claim_id: c_UjgT28DF87AAJFhHq5hYmC
          source_id: s_X6tRCXCibPw156DfZrxcoL
          stance: supports
          locator: CBDB:531663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531663）
          source: &a1
            id: s_X6tRCXCibPw156DfZrxcoL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲强（CBDB 531663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531663&o=json
            external_identifier: CBDB:531663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FtjAszVP5AEt8Q2dir3fKC
        subject_person_id: p_FniToytG63bwq4RGgir5qd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲强，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 531663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5NvsB7_D6Ap3PlBT7iFN_x
          claim_id: c_FtjAszVP5AEt8Q2dir3fKC
          source_id: s_X6tRCXCibPw156DfZrxcoL
          stance: supports
          locator: CBDB:531663
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

# 王仲强

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲强 | accepted |
| bio.summary | 王仲强，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 531663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲强（CBDB 531663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531663&o=json)
