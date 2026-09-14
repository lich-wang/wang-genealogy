---
schema: wang-person/v1
id: p_2TkqAvb3gC2J9torN4HMvi
status: active
merged_into: null
display_name: 王餘佑
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WF1mWxiW84iDbdAk6QDeUQ
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Prbf8ZMcTru1TxH6DZHC4w
          claim_id: c_WF1mWxiW84iDbdAk6QDeUQ
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
          stance: supports
          locator: CBDB:69444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69444）
          source: &a1
            id: s_2kNj51mFEsiBAYBCRH14Nz
            source_type: api_record
            title: 中国历代人物传记资料库：王餘佑（CBDB 69444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json
            external_identifier: CBDB:69444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3j4FPqTZ8CkzNVXX17JR2z
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKWtvX8YEma8DP67GqmQ3H
          claim_id: c_3j4FPqTZ8CkzNVXX17JR2z
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
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
        id: c_XWJDFZfLAGqvnZAG876Q5c
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1684年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qy4HJAAa2rCh9VedsgkQE9
          claim_id: c_XWJDFZfLAGqvnZAG876Q5c
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
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
        id: c_dCqm62XSyo3rpJCDrcCLQF
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘佑（1616年—1684年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 69444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ows6Ma_Qhfkfw-GAD5U1eB
          claim_id: c_dCqm62XSyo3rpJCDrcCLQF
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
          stance: supports
          locator: CBDB:69444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hm3ZZFSLAunzab6lSRnoRJ
        subject_person_id: p_B2TcckowDQtcfnGbYi66Ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2TkqAvb3gC2J9torN4HMvi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ccf8LqLpseCBX9Xz70DpZd
          claim_id: c_hm3ZZFSLAunzab6lSRnoRJ
          source_id: s_2kNj51mFEsiBAYBCRH14Nz
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13154：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B2TcckowDQtcfnGbYi66Ex
        status: active
        display_name: 王延善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lFkE1NmAn2lvGwyOoC0f8N
        subject_person_id: p_1bt9A48WPN5iyDMj12mMZc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2TkqAvb3gC2J9torN4HMvi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi-AjqF4UKOfKDeq5tBQbh
          claim_id: c_lFkE1NmAn2lvGwyOoC0f8N
          source_id: s_s-GgjeLnVXxw7RKARCAm8R
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69444 王餘佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s-GgjeLnVXxw7RKARCAm8R
            source_type: api_record
            title: 中国历代人物传记资料库：王餘恪（CBDB 526972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526972&o=json
            external_identifier: CBDB:526972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1bt9A48WPN5iyDMj12mMZc
        status: active
        display_name: 王餘恪
        merged_into_person_id: null
    - claim:
        id: c_27txtP9pFam6KvrhU1vSPe
        subject_person_id: p_2TkqAvb3gC2J9torN4HMvi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zUd5JQtsvmEP1aiwEfVZ5E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6-IAlbB1lW2YCPBR7gnXiZ
          claim_id: c_27txtP9pFam6KvrhU1vSPe
          source_id: s_LcXyYpDqAP9RSPReTA576Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69444 王餘佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LcXyYpDqAP9RSPReTA576Z
            source_type: api_record
            title: 中国历代人物传记资料库：王餘嚴（CBDB 526974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526974&o=json
            external_identifier: CBDB:526974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zUd5JQtsvmEP1aiwEfVZ5E
        status: active
        display_name: 王餘嚴
        merged_into_person_id: null
---

# 王餘佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘佑 | accepted |
| birth.date | 1616年 | accepted |
| death.date | 1684年 | accepted |
| bio.summary | 王餘佑（1616年—1684年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 69444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2TcckowDQtcfnGbYi66Ex | 王延善 | accepted |
| other | p_1bt9A48WPN5iyDMj12mMZc | 王餘恪 | accepted |
| other | p_zUd5JQtsvmEP1aiwEfVZ5E | 王餘嚴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王餘恪（CBDB 526972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526972&o=json)
- [中国历代人物传记资料库：王餘嚴（CBDB 526974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526974&o=json)
- [中国历代人物传记资料库：王餘佑（CBDB 69444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69444&o=json)
