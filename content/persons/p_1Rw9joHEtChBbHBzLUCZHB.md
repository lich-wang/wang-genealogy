---
schema: wang-person/v1
id: p_1Rw9joHEtChBbHBzLUCZHB
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUDxA7yR6z7E7Rpo2n54yx
        subject_person_id: p_1Rw9joHEtChBbHBzLUCZHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vHXBhiY1HtULgF4qQ4iE3Q
          claim_id: c_HUDxA7yR6z7E7Rpo2n54yx
          source_id: s_6taQ8cZbVvvGbMQutX9zTd
          stance: supports
          locator: CBDB:39417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39417）
          source: &a1
            id: s_6taQ8cZbVvvGbMQutX9zTd
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 39417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39417&o=json
            external_identifier: CBDB:39417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QvXYjFb2z5foAJ854GnkMp
        subject_person_id: p_1Rw9joHEtChBbHBzLUCZHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王奇，宋人物。籍贯贛縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任殿中侍御史。（中国历代人物传记资料库 CBDB 39417）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wVxPUa6lfSg_yHs5Hn3hWK
          claim_id: c_QvXYjFb2z5foAJ854GnkMp
          source_id: s_6taQ8cZbVvvGbMQutX9zTd
          stance: supports
          locator: CBDB:39417
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | 王奇，宋人物。籍贯贛縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任殿中侍御史。（中国历代人物传记资料库 CBDB 39417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 39417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39417&o=json)
