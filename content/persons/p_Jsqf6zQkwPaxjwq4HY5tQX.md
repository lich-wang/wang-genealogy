---
schema: wang-person/v1
id: p_Jsqf6zQkwPaxjwq4HY5tQX
status: active
merged_into: null
display_name: 王与文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EfC2E4tnVBfGMZyJKW7yAv
        subject_person_id: p_Jsqf6zQkwPaxjwq4HY5tQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王与文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TSoFAuwFZukWh1dPJ2z41A
          claim_id: c_EfC2E4tnVBfGMZyJKW7yAv
          source_id: s_cq7yBPfNjhg37aQ7iv6sRP
          stance: supports
          locator: Q45461070
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_cq7yBPfNjhg37aQ7iv6sRP
            source_type: api_record
            title: 维基数据：王与文（Q45461070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45461070
            external_identifier: Q45461070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_aM2W697nn62pLg2TwnQsF5
          claim_id: c_EfC2E4tnVBfGMZyJKW7yAv
          source_id: s_h31Lnk3HhUmspA3FfUxLJq
          stance: supports
          locator: CBDB:235541
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_h31Lnk3HhUmspA3FfUxLJq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王與文（235541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235541&o=json
            external_identifier: CBDB:235541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWVd8B42jnj99sJBg7GL3K
        subject_person_id: p_Jsqf6zQkwPaxjwq4HY5tQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 235541
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Erti1SxtvmUMWCB2Hu9NJp
          claim_id: c_KWVd8B42jnj99sJBg7GL3K
          source_id: s_cq7yBPfNjhg37aQ7iv6sRP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UveCzvMm14kYMRWdK45WiU
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jsqf6zQkwPaxjwq4HY5tQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vc1X43GMWoPytoJx5fZzN6
          claim_id: c_UveCzvMm14kYMRWdK45WiU
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
        - id: cs_HXf6TUgUyunKjB7vDrhV17
          claim_id: c_UveCzvMm14kYMRWdK45WiU
          source_id: s_cq7yBPfNjhg37aQ7iv6sRP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_no447p5Q9fnAzU6oiVPKbX
          claim_id: c_UveCzvMm14kYMRWdK45WiU
          source_id: s_XjxsW4fSFjTSLcgZb1nJFe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆三十八年庚戌科序齒錄:一卷
          source:
            id: s_XjxsW4fSFjTSLcgZb1nJFe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象春（126731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json
            external_identifier: CBDB:126731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:52.218Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王与文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王与文 | accepted |
| bio.summary | Ming dynasty person CBDB = 235541 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
- [维基数据：王与文（Q45461070）](https://www.wikidata.org/wiki/Q45461070)
- [CBDB 中国历代人物传记资料库：王象春（126731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json)
- [CBDB 中国历代人物传记资料库：王與文（235541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235541&o=json)
