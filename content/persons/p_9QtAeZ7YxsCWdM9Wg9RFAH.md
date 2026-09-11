---
schema: wang-person/v1
id: p_9QtAeZ7YxsCWdM9Wg9RFAH
status: active
merged_into: null
display_name: 王裕緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aKkTuZP9a841z1UPH4Ti5z
        subject_person_id: p_9QtAeZ7YxsCWdM9Wg9RFAH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtqVX8hDW4F69SiKGJM81H
          claim_id: c_aKkTuZP9a841z1UPH4Ti5z
          source_id: s_QkDNHDUJABePaigPYJyEHN
          stance: supports
          locator: CBDB:640221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640221）
          source: &a1
            id: s_QkDNHDUJABePaigPYJyEHN
            source_type: api_record
            title: 中国历代人物传记资料库：王裕緒（CBDB 640221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640221&o=json
            external_identifier: CBDB:640221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E1FR9dWnMntiRWyuirPsz6
        subject_person_id: p_9QtAeZ7YxsCWdM9Wg9RFAH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕緒，清人物。籍贯資州直隸州直轄地方，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfLupSwwg2Vk9L4ivmZ-dM
          claim_id: c_E1FR9dWnMntiRWyuirPsz6
          source_id: s_QkDNHDUJABePaigPYJyEHN
          stance: supports
          locator: CBDB:640221
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

# 王裕緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕緒 | accepted |
| bio.summary | 王裕緒，清人物。籍贯資州直隸州直轄地方，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕緒（CBDB 640221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640221&o=json)
