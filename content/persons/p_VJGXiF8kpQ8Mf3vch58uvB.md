---
schema: wang-person/v1
id: p_VJGXiF8kpQ8Mf3vch58uvB
status: active
merged_into: null
display_name: 王祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrhqTDHQeEZa2HHnCAfhA7
        subject_person_id: p_VJGXiF8kpQ8Mf3vch58uvB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wx1ybEVE2waXYSDPtf5K8L
          claim_id: c_SrhqTDHQeEZa2HHnCAfhA7
          source_id: s_5LMXLAnRdf863f9LFaKhda
          stance: supports
          locator: CBDB:222724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222724）
          source: &a1
            id: s_5LMXLAnRdf863f9LFaKhda
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 222724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222724&o=json
            external_identifier: CBDB:222724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smA2Lsd6UN9a73qdsMvoVE
        subject_person_id: p_VJGXiF8kpQ8Mf3vch58uvB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，明人物。萬曆十一年進士，籍贯開州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222724）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1nhwbJq4FmnrwwmrVk2eai
          claim_id: c_smA2Lsd6UN9a73qdsMvoVE
          source_id: s_5LMXLAnRdf863f9LFaKhda
          stance: supports
          locator: CBDB:222724
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

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，明人物。萬曆十一年進士，籍贯開州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 222724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 222724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222724&o=json)
