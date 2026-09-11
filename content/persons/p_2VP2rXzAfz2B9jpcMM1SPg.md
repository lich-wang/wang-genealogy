---
schema: wang-person/v1
id: p_2VP2rXzAfz2B9jpcMM1SPg
status: active
merged_into: null
display_name: 王伯瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikuyTEn98Q5U8rCX3v9pFM
        subject_person_id: p_2VP2rXzAfz2B9jpcMM1SPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yp5Qe8CW71tEff4KoCr9D5
          claim_id: c_ikuyTEn98Q5U8rCX3v9pFM
          source_id: s_SyQ3f7gsGKonymGrNtVKWy
          stance: supports
          locator: CBDB:142397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142397）
          source: &a1
            id: s_SyQ3f7gsGKonymGrNtVKWy
            source_type: api_record
            title: 中国历代人物传记资料库：王伯瑜（CBDB 142397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142397&o=json
            external_identifier: CBDB:142397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VeWwF6hT6kUkLBx8NmkKCY
        subject_person_id: p_2VP2rXzAfz2B9jpcMM1SPg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHkYu8hCsaANpS36Ek7hCn
          claim_id: c_VeWwF6hT6kUkLBx8NmkKCY
          source_id: s_SyQ3f7gsGKonymGrNtVKWy
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
        id: c_HEevBEaQts5bLKLNiCYbqy
        subject_person_id: p_2VP2rXzAfz2B9jpcMM1SPg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 628年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TmJCSDYc48DHZC73aeAn1x
          claim_id: c_HEevBEaQts5bLKLNiCYbqy
          source_id: s_SyQ3f7gsGKonymGrNtVKWy
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
        id: c_zDdouooJ6LXNcDg2VYDNL9
        subject_person_id: p_2VP2rXzAfz2B9jpcMM1SPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯瑜（557年—628年），史料所见人物。本项目依据《中国历代人物传记资料库：王伯瑜（CBDB 142397）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wBkIR99y4GE1HIkyQxiHcl
          claim_id: c_zDdouooJ6LXNcDg2VYDNL9
          source_id: s_SyQ3f7gsGKonymGrNtVKWy
          stance: supports
          locator: CBDB:142397
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王伯瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯瑜 | accepted |
| birth.date | 557年 | accepted |
| death.date | 628年 | accepted |
| bio.summary | 王伯瑜（557年—628年），史料所见人物。本项目依据《中国历代人物传记资料库：王伯瑜（CBDB 142397）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯瑜（CBDB 142397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142397&o=json)
