---
schema: wang-person/v1
id: p_4HgQCmsRM2TFQGDvVE3xk2
status: active
merged_into: null
display_name: 王史華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tHLHwMPxG68KmBRQMfjRNp
        subject_person_id: p_4HgQCmsRM2TFQGDvVE3xk2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王史華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VGkFr1Lw8xYccbsFBvjXRr
          claim_id: c_tHLHwMPxG68KmBRQMfjRNp
          source_id: s_E778ZZH9UR1BGY19s1AzKv
          stance: supports
          locator: CBDB:636484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636484）
          source: &a1
            id: s_E778ZZH9UR1BGY19s1AzKv
            source_type: api_record
            title: 中国历代人物传记资料库：王史華（CBDB 636484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636484&o=json
            external_identifier: CBDB:636484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4MwS1gHzVdnVbQTAzgW1He
        subject_person_id: p_4HgQCmsRM2TFQGDvVE3xk2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王史華，清人物。籍贯嘉應直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aTlEVH-Zw0fWu8f6Qf_KCw
          claim_id: c_4MwS1gHzVdnVbQTAzgW1He
          source_id: s_E778ZZH9UR1BGY19s1AzKv
          stance: supports
          locator: CBDB:636484
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

# 王史華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王史華 | accepted |
| bio.summary | 王史華，清人物。籍贯嘉應直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王史華（CBDB 636484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636484&o=json)
