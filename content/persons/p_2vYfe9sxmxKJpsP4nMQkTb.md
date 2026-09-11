---
schema: wang-person/v1
id: p_2vYfe9sxmxKJpsP4nMQkTb
status: active
merged_into: null
display_name: 王聯登
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_orsStAcMAJCQk9zfxNYJQD
        subject_person_id: p_2vYfe9sxmxKJpsP4nMQkTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ABzpXdX8vXmcy3JNn9kDwF
          claim_id: c_orsStAcMAJCQk9zfxNYJQD
          source_id: s_wUZ6odefpdR6vWS3xd2P8w
          stance: supports
          locator: CBDB:639953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639953）
          source: &a1
            id: s_wUZ6odefpdR6vWS3xd2P8w
            source_type: api_record
            title: 中国历代人物传记资料库：王聯登（CBDB 639953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639953&o=json
            external_identifier: CBDB:639953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AvTS3AxUWF7KqMXrhy19Xr
        subject_person_id: p_2vYfe9sxmxKJpsP4nMQkTb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯登，清人物。籍贯歷城，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639953）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qQCrKovREN44g9qEzt8Who
          claim_id: c_AvTS3AxUWF7KqMXrhy19Xr
          source_id: s_wUZ6odefpdR6vWS3xd2P8w
          stance: supports
          locator: CBDB:639953
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

# 王聯登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聯登 | accepted |
| bio.summary | 王聯登，清人物。籍贯歷城，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聯登（CBDB 639953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639953&o=json)
