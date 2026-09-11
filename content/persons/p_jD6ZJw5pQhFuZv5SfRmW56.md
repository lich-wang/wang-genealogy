---
schema: wang-person/v1
id: p_jD6ZJw5pQhFuZv5SfRmW56
status: active
merged_into: null
display_name: 王炯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s2PJNFsAcp8imaTGrcYapT
        subject_person_id: p_jD6ZJw5pQhFuZv5SfRmW56
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkSQGbKGcKwyph2BSvLhes
          claim_id: c_s2PJNFsAcp8imaTGrcYapT
          source_id: s_TgTizeuCQnray6yHecKn2a
          stance: supports
          locator: CBDB:71143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71143）
          source: &a1
            id: s_TgTizeuCQnray6yHecKn2a
            source_type: api_record
            title: 中国历代人物传记资料库：王炯（CBDB 71143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71143&o=json
            external_identifier: CBDB:71143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fBSWBU29agEyeDNvNDMSvd
        subject_person_id: p_jD6ZJw5pQhFuZv5SfRmW56
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1812年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9yK85xgZhyEeFERzCSE53
          claim_id: c_fBSWBU29agEyeDNvNDMSvd
          source_id: s_TgTizeuCQnray6yHecKn2a
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
        id: c_GKXv98X9vpP6Sa8ikanKQt
        subject_person_id: p_jD6ZJw5pQhFuZv5SfRmW56
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLgaP9ys5v8w14b9AhZdPm
          claim_id: c_GKXv98X9vpP6Sa8ikanKQt
          source_id: s_TgTizeuCQnray6yHecKn2a
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
        id: c_xF5Pf4C3v7Q9fu95vpJZSN
        subject_person_id: p_jD6ZJw5pQhFuZv5SfRmW56
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯（1812年—1859年），清人物。籍贯宿遷。（中国历代人物传记资料库 CBDB 71143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cd30xU2ORd-4lseYCEJNhO
          claim_id: c_xF5Pf4C3v7Q9fu95vpJZSN
          source_id: s_TgTizeuCQnray6yHecKn2a
          stance: supports
          locator: CBDB:71143
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

# 王炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炯 | accepted |
| birth.date | 1812年 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | 王炯（1812年—1859年），清人物。籍贯宿遷。（中国历代人物传记资料库 CBDB 71143） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炯（CBDB 71143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71143&o=json)
