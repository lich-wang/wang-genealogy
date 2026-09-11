---
schema: wang-person/v1
id: p_v4jLy1JAE5C7khGgAfPcgB
status: active
merged_into: null
display_name: 王才
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_voMwC1BeSLb1FvzX4eSRvt
        subject_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u2uEDk5yxHLMuq8aNJJah7
          claim_id: c_voMwC1BeSLb1FvzX4eSRvt
          source_id: s_BpYNY51jqoouFQKJmwATV7
          stance: supports
          locator: CBDB:138847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138847）
          source: &a1
            id: s_BpYNY51jqoouFQKJmwATV7
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 138847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138847&o=json
            external_identifier: CBDB:138847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8BHWMpXK1B2cnJU4dQ64HK
        subject_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 582年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G85WmsGKwRsmuYhRwJuoTn
          claim_id: c_8BHWMpXK1B2cnJU4dQ64HK
          source_id: s_BpYNY51jqoouFQKJmwATV7
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
        id: c_MRKijxhZhtW9R7DbwGQfd4
        subject_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gWWLw5rj1crJpefY5QyDEC
          claim_id: c_MRKijxhZhtW9R7DbwGQfd4
          source_id: s_BpYNY51jqoouFQKJmwATV7
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
        id: c_fEwKvNXJqNK8ni6nhPf85t
        subject_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才（582年—645年），唐人物。籍贯太原，曾任大將軍、縣令、上護軍。（中国历代人物传记资料库 CBDB 138847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_50gGYlX6lQ1-vQQvTPeuAK
          claim_id: c_fEwKvNXJqNK8ni6nhPf85t
          source_id: s_BpYNY51jqoouFQKJmwATV7
          stance: supports
          locator: CBDB:138847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1vlb_KQQfrn81trAAqaP2w
        subject_person_id: p_SR35hfKXgc9UGvXjuXLUiG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xTxF5N6DIG90L_-0j43bg
          claim_id: c_1vlb_KQQfrn81trAAqaP2w
          source_id: s_xA5TM5yFwXm4B7AKPpBQzz
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 132：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xA5TM5yFwXm4B7AKPpBQzz
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 146747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146747&o=json
            external_identifier: CBDB:146747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SR35hfKXgc9UGvXjuXLUiG
        status: active
        display_name: 王開
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| birth.date | 582年 | accepted |
| death.date | 645年 | accepted |
| bio.summary | 王才（582年—645年），唐人物。籍贯太原，曾任大將軍、縣令、上護軍。（中国历代人物传记资料库 CBDB 138847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SR35hfKXgc9UGvXjuXLUiG | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 138847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138847&o=json)
- [中国历代人物传记资料库：王開（CBDB 146747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146747&o=json)
