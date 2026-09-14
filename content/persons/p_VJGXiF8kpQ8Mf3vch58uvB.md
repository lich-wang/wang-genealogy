---
schema: wang-person/v1
id: p_VJGXiF8kpQ8Mf3vch58uvB
status: active
merged_into: null
display_name: 王祚
revision: 3
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
  parents:
    - claim:
        id: c_r03PHsHTN1MdINyP1TtmqR
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VJGXiF8kpQ8Mf3vch58uvB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvywXwI4Q4bbjj_afY_pH-
          claim_id: c_r03PHsHTN1MdINyP1TtmqR
          source_id: s_8QNZtDlJYJUuPbnjQEysgh
          stance: supports
          locator: CBDB：兄弟 王祺（206753）之父／母 王曰銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王祚 与 王祺 为同胞（CBDB 记「兄」），王祺 之父／母即 王祚 之父／母。
          source:
            id: s_8QNZtDlJYJUuPbnjQEysgh
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 222724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222724&o=json
            external_identifier: CBDB:222724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8jyFvK41t2tC3V3Q5knu
        status: active
        display_name: 王曰銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4iWvKZBOCI-5xdg_tvEEvQ
        subject_person_id: p_VJGXiF8kpQ8Mf3vch58uvB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oHjaC9TjJi3ZsG3y7S86kz
          claim_id: c_4iWvKZBOCI-5xdg_tvEEvQ
          source_id: s_8QNZtDlJYJUuPbnjQEysgh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206753 王祺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8QNZtDlJYJUuPbnjQEysgh
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 222724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222724&o=json
            external_identifier: CBDB:222724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dS2fybT134JWfvQgxwSUXh
        status: active
        display_name: 王祺
        merged_into_person_id: null
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
| parents | p_yE8jyFvK41t2tC3V3Q5knu | 王曰銓 | accepted |
| other | p_dS2fybT134JWfvQgxwSUXh | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 222724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222724&o=json)
