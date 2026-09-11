---
schema: wang-person/v1
id: p_SSMkJrsK3oXLLzY5r144oT
status: active
merged_into: null
display_name: 王克謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8MAE4b2pCxRqj6ckZAJNQ
        subject_person_id: p_SSMkJrsK3oXLLzY5r144oT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KRafaMr1U5P6DKoMWTNRG
          claim_id: c_F8MAE4b2pCxRqj6ckZAJNQ
          source_id: s_mvT7nCHvLKsa6XzhJwChzW
          stance: supports
          locator: CBDB:578771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578771）
          source: &a1
            id: s_mvT7nCHvLKsa6XzhJwChzW
            source_type: api_record
            title: 中国历代人物传记资料库：王克謙（CBDB 578771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578771&o=json
            external_identifier: CBDB:578771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NbRSV1pmbJSFQgUMFFWfur
        subject_person_id: p_SSMkJrsK3oXLLzY5r144oT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1903年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lc4V16R78wNRthKgUUVXuo
          claim_id: c_NbRSV1pmbJSFQgUMFFWfur
          source_id: s_mvT7nCHvLKsa6XzhJwChzW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r8d6Jkc6aAZE6SNK6GMz51
        subject_person_id: p_SSMkJrsK3oXLLzY5r144oT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克謙（生于1903年），清人物。籍贯衢州府。（中国历代人物传记资料库 CBDB 578771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JjhEqlxRnTbAIhAceiRetp
          claim_id: c_r8d6Jkc6aAZE6SNK6GMz51
          source_id: s_mvT7nCHvLKsa6XzhJwChzW
          stance: supports
          locator: CBDB:578771
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

# 王克謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克謙 | accepted |
| birth.date | 1903年 | accepted |
| bio.summary | 王克謙（生于1903年），清人物。籍贯衢州府。（中国历代人物传记资料库 CBDB 578771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克謙（CBDB 578771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578771&o=json)
