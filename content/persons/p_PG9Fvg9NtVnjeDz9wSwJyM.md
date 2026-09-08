---
schema: wang-person/v1
id: p_PG9Fvg9NtVnjeDz9wSwJyM
status: active
merged_into: null
display_name: 王僧辩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sTvVnapcopnpNCrP9iwVQL
        subject_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧辩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UxY4CcB6NDPugiCtthLBdN
          claim_id: c_sTvVnapcopnpNCrP9iwVQL
          source_id: s_GQefkJkYEytxDiEAKBx9wh
          stance: supports
          locator: Q699672
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_GQefkJkYEytxDiEAKBx9wh
            source_type: api_record
            title: 维基数据：王僧辩（Q699672）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699672
            external_identifier: Q699672
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%BE%AF
        - id: cs_5egVJNaUHdcWXxf8nKcbSw
          claim_id: c_sTvVnapcopnpNCrP9iwVQL
          source_id: s_VbZzDNCWy7cMdC4cTM9L9g
          stance: supports
          locator: CBDB:164581
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_VbZzDNCWy7cMdC4cTM9L9g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王僧辯（164581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164581&o=json
            external_identifier: CBDB:164581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4d61QCFDDurTDKS31zozJV
        subject_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Liang Dynasty regent
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiPC8YGhYeLd4Ah8wSWZnH
          claim_id: c_4d61QCFDDurTDKS31zozJV
          source_id: s_GQefkJkYEytxDiEAKBx9wh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RVStnCa35u55EYp5D99Kua
        subject_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1E6QRhZqirggxHQEexWGaz
          claim_id: c_RVStnCa35u55EYp5D99Kua
          source_id: s_GQefkJkYEytxDiEAKBx9wh
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PZdw5ovsSVYnaRNDfnanzU
        subject_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 555年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxQV1dTHFzSGRnBcUzTsPE
          claim_id: c_PZdw5ovsSVYnaRNDfnanzU
          source_id: s_GQefkJkYEytxDiEAKBx9wh
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EFH8ko8MDXPm9esnwUHNwd
        subject_person_id: p_PG9Fvg9NtVnjeDz9wSwJyM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HSq6viRBnzj6LqF76CNxvY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYHjLAFHpw7F52643EKsBU
          claim_id: c_EFH8ko8MDXPm9esnwUHNwd
          source_id: s_5364Pc1QEFgx1FqUbtfHiC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5364Pc1QEFgx1FqUbtfHiC
            source_type: api_record
            title: 维基数据：王𫖮（Q28413506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28413506
            external_identifier: Q28413506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%A1%97
        - id: cs_i1LLF3YTGcdrEaLUeRHy2E
          claim_id: c_EFH8ko8MDXPm9esnwUHNwd
          source_id: s_GQefkJkYEytxDiEAKBx9wh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_HSq6viRBnzj6LqF76CNxvY
        status: active
        display_name: 王𫖮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僧辩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僧辩 | accepted |
| bio.summary | Liang Dynasty regent | accepted |
| birth.date | 5世纪 | accepted |
| death.date | 555年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HSq6viRBnzj6LqF76CNxvY | 王𫖮 | accepted |

## 外部来源

- [维基数据：王僧辩（Q699672）](https://www.wikidata.org/wiki/Q699672)
- [维基数据：王𫖮（Q28413506）](https://www.wikidata.org/wiki/Q28413506)
- [CBDB 中国历代人物传记资料库：王僧辯（164581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164581&o=json)
