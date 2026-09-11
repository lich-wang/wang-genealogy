---
schema: wang-person/v1
id: p_MR1SmR7MP3K2G59QGLypzt
status: active
merged_into: null
display_name: 王大齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GeW2UpRgUNaDJtqUi7vfBK
        subject_person_id: p_MR1SmR7MP3K2G59QGLypzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MBBDaGLjPPQmqXhxeRHQer
          claim_id: c_GeW2UpRgUNaDJtqUi7vfBK
          source_id: s_JvQCHprWizNzHN3sNvjeLi
          stance: supports
          locator: CBDB:636924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636924）
          source: &a1
            id: s_JvQCHprWizNzHN3sNvjeLi
            source_type: api_record
            title: 中国历代人物传记资料库：王大齢（CBDB 636924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636924&o=json
            external_identifier: CBDB:636924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KtY33JDwDxi2ooEiPJ6NJY
        subject_person_id: p_MR1SmR7MP3K2G59QGLypzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大齢，清人物。籍贯鄞縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4kmnVct702BkWPaeK3Dm0m
          claim_id: c_KtY33JDwDxi2ooEiPJ6NJY
          source_id: s_JvQCHprWizNzHN3sNvjeLi
          stance: supports
          locator: CBDB:636924
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

# 王大齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大齢 | accepted |
| bio.summary | 王大齢，清人物。籍贯鄞縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大齢（CBDB 636924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636924&o=json)
