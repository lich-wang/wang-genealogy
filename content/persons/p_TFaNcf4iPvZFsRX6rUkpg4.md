---
schema: wang-person/v1
id: p_TFaNcf4iPvZFsRX6rUkpg4
status: active
merged_into: null
display_name: 王阿剌帖木兒
cbdb_id: 101478
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FrYG4BCKWX9W8Q8ZT5KfGS
        subject_person_id: p_TFaNcf4iPvZFsRX6rUkpg4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阿剌帖木兒，元人物。中国历代人物传记资料库（CBDB）以人物编号 101478 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Uc3vkH05H7GmlT5OPB99Y8
          claim_id: c_FrYG4BCKWX9W8Q8ZT5KfGS
          source_id: s_qshDi2LxMb8NvB6c4rEPSn
          stance: supports
          locator: CBDB:101478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qshDi2LxMb8NvB6c4rEPSn
            source_type: api_record
            title: 中国历代人物传记资料库：王阿剌帖木兒（CBDB 101478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101478&o=json
            external_identifier: CBDB:101478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_weYpKebmtBKurwJoeUsJWC
        subject_person_id: p_TFaNcf4iPvZFsRX6rUkpg4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阿剌帖木兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kb22MNq1Bfg2Bu8Gx66Gy9
          claim_id: c_weYpKebmtBKurwJoeUsJWC
          source_id: s_qshDi2LxMb8NvB6c4rEPSn
          stance: supports
          locator: CBDB:101478
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_qshDi2LxMb8NvB6c4rEPSn
            source_type: api_record
            title: 中国历代人物传记资料库：王阿剌帖木兒（CBDB 101478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101478&o=json
            external_identifier: CBDB:101478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZSUHA3BarBASFpw_JP8i93
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TFaNcf4iPvZFsRX6rUkpg4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rZmSK1bEHqxHn5hdj_qUo
          claim_id: c_ZSUHA3BarBASFpw_JP8i93
          source_id: s_qshDi2LxMb8NvB6c4rEPSn
          stance: supports
          locator: 元人傳記資料索引，1339：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2NMYzKK7wTac2gL33PTAn5
        status: active
        display_name: 王綧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王阿剌帖木兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王阿剌帖木兒，元人物。中国历代人物传记资料库（CBDB）以人物编号 101478 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王阿剌帖木兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2NMYzKK7wTac2gL33PTAn5 | 王綧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王阿剌帖木兒（CBDB 101478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101478&o=json)
