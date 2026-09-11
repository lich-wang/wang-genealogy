---
schema: wang-person/v1
id: p_ojf36Ko9wQJ75BMAk9xQXN
status: active
merged_into: null
display_name: 王應元
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_424p3tj4yL5xrDgi4GPJGg
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tN8Z721gNK9e1ZSAV3F7h
          claim_id: c_424p3tj4yL5xrDgi4GPJGg
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
          stance: supports
          locator: CBDB:207380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207380）
          source: &a1
            id: s_ng99AojkNLv2bb6Sr7ewpk
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 207380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207380&o=json
            external_identifier: CBDB:207380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HEiAa746tdbzHSyCy7e3qW
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYSFn1GH4TYAkn14hegPiB
          claim_id: c_HEiAa746tdbzHSyCy7e3qW
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
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
        id: c_jheMChZrmEpt9R4GHhCzGc
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元（生于1558年），明人物。籍贯深州，入仕進士。（中国历代人物传记资料库 CBDB 207380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dKnKczSaNjKciuUPoEhTec
          claim_id: c_jheMChZrmEpt9R4GHhCzGc
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
          stance: supports
          locator: CBDB:207380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bgt7CjFyFNf2dCG1Afy3oT
        subject_person_id: p_nF9eSAv63Vch3PwSGVjHeP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEd7Uj6yd2TgC3KTeDla5x
          claim_id: c_Bgt7CjFyFNf2dCG1Afy3oT
          source_id: s_nQ3T8ajEmMX2wxisG4Pyyc
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nQ3T8ajEmMX2wxisG4Pyyc
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 231819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231819&o=json
            external_identifier: CBDB:231819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nF9eSAv63Vch3PwSGVjHeP
        status: active
        display_name: 王璧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cBBKgF5gPj0LNz3gMN08sY
        subject_person_id: p_F7dQbLK9gkNwBw69VDsDNX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMKtdpylXWbEFyMhBYv6Mu
          claim_id: c_cBBKgF5gPj0LNz3gMN08sY
          source_id: s_MRXEES1wuSt8n3SXU9KxpG
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MRXEES1wuSt8n3SXU9KxpG
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 231818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231818&o=json
            external_identifier: CBDB:231818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F7dQbLK9gkNwBw69VDsDNX
        status: active
        display_name: 王著
        merged_into_person_id: null
    - claim:
        id: c_NZXNl9Baf_3CIM5DQSX8Qb
        subject_person_id: p_x127GNopQ5s9CV9dnqcJYE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oq9CTcfFn0XuibLiSkVJjQ
          claim_id: c_NZXNl9Baf_3CIM5DQSX8Qb
          source_id: s_9Un6g3cwtYVaP3Pi7ZmRRB
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9Un6g3cwtYVaP3Pi7ZmRRB
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 231817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231817&o=json
            external_identifier: CBDB:231817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x127GNopQ5s9CV9dnqcJYE
        status: active
        display_name: 王釗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應元 | accepted |
| birth.date | 1558年 | accepted |
| bio.summary | 王應元（生于1558年），明人物。籍贯深州，入仕進士。（中国历代人物传记资料库 CBDB 207380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nF9eSAv63Vch3PwSGVjHeP | 王璧 | accepted |
| ancestors | p_F7dQbLK9gkNwBw69VDsDNX | 王著 | accepted |
| ancestors | p_x127GNopQ5s9CV9dnqcJYE | 王釗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 231819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231819&o=json)
- [中国历代人物传记资料库：王應元（CBDB 207380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207380&o=json)
- [中国历代人物传记资料库：王釗（CBDB 231817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231817&o=json)
- [中国历代人物传记资料库：王著（CBDB 231818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231818&o=json)
