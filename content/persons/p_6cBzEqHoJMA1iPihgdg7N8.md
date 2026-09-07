---
schema: wang-person/v1
id: p_6cBzEqHoJMA1iPihgdg7N8
status: active
merged_into: null
display_name: 王預之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z60LDGb9AhnEbmxhWVKs_y
        subject_person_id: p_6cBzEqHoJMA1iPihgdg7N8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預之，史料所见人物。本项目依据《王兴之夫妇墓志释文》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OFBKIHx4KVmGYfNkxX1sAI
          claim_id: c_Z60LDGb9AhnEbmxhWVKs_y
          source_id: s_nY1ipz6YPu5MoRpup3uMJA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nY1ipz6YPu5MoRpup3uMJA
            source_type: epitaph
            title: 王兴之夫妇墓志释文
            creator: null
            publisher: 搜狐号
            published_at_text: null
            canonical_url: https://www.sohu.com/a/285320528_120046706
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:51.113Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iMTQpaZTGf46ZqfJUA7Ptm
        subject_person_id: p_6cBzEqHoJMA1iPihgdg7N8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f7RUrwgbccgaBv3n78f52b
          claim_id: c_iMTQpaZTGf46ZqfJUA7Ptm
          source_id: s_nY1ipz6YPu5MoRpup3uMJA
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ACfVitqNBFE5XCFoKCyx51
        subject_person_id: p_SwQAsLJPWNhpZD964WiCGH
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_6cBzEqHoJMA1iPihgdg7N8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3W984fTtAG8Ccixu3NixQF
          claim_id: c_ACfVitqNBFE5XCFoKCyx51
          source_id: s_nY1ipz6YPu5MoRpup3uMJA
          stance: supports
          locator: 王兴之夫妇墓志释文
          quotation: 长子闽之……次子咸之……次子预之。
          interpretation_note: null
          source:
            id: s_nY1ipz6YPu5MoRpup3uMJA
            source_type: epitaph
            title: 王兴之夫妇墓志释文
            creator: null
            publisher: 搜狐号
            published_at_text: null
            canonical_url: https://www.sohu.com/a/285320528_120046706
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:51.113Z
            metadata_json: null
      object_person:
        id: p_SwQAsLJPWNhpZD964WiCGH
        status: active
        display_name: 王興之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王預之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王預之，史料所见人物。本项目依据《王兴之夫妇墓志释文》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王預之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SwQAsLJPWNhpZD964WiCGH | 王興之 | accepted |

## 外部来源

- [王兴之夫妇墓志释文](https://www.sohu.com/a/285320528_120046706)
