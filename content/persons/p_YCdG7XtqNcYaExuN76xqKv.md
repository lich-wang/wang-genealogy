---
schema: wang-person/v1
id: p_YCdG7XtqNcYaExuN76xqKv
status: active
merged_into: null
display_name: 王瑶
cbdb_id: 302968
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3VJPMWm6BHRXzpGAAk5TGx
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_sd1QvtA3hRvJPB9qanaJF4
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_CS7y_zJifuVvDGkuCqbMT1
          claim_id: c_3VJPMWm6BHRXzpGAAk5TGx
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: CBDB:302968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p4Jc8LB9YB3bScFAx3zcwL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瑤（302968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json
            external_identifier: CBDB:302968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFYFYRtEE19bvDNPqEqBpT
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2eTELdtBMB19YwC6z6D5w3
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tLu8bZdHKFcKjvQ3hJ6TJQ
          claim_id: c_rFYFYRtEE19bvDNPqEqBpT
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: Q45626878
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KWXdZhHobTTkLwe4r4HpD9
        subject_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YCdG7XtqNcYaExuN76xqKv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmbBcQSqzGATpbzN8BGMgx
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_tTR1tnVGbBjKWZgRKbkyxb
          claim_id: c_KWXdZhHobTTkLwe4r4HpD9
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person:
        id: p_ptMfEt1rAT4WiPXRdKXa9c
        status: active
        display_name: 王馨
        merged_into_person_id: null
  children:
    - claim:
        id: c_Wc2jmmPM58wTQYJaVf4qxJ
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfDfhJNJAU9EqLxGcc2wcT
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_cLEqrKXY73DkEAFGT4PZQv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cLEqrKXY73DkEAFGT4PZQv
            source_type: api_record
            title: 维基数据：王崇古（Q15934835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934835
            external_identifier: Q15934835
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.009Z
            metadata_json: null
        - id: cs_pcfCdwCUKj9poqWhBQdRFD
          claim_id: c_Wc2jmmPM58wTQYJaVf4qxJ
          source_id: s_y5KoWVZ1HsF6z8upxwGLeU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_y5KoWVZ1HsF6z8upxwGLeU
            source_type: api_record
            title: 维基数据：王瑶（Q45626878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626878
            external_identifier: Q45626878
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
    - claim:
        id: c_meue216oGnGH1UcBqOcjQh
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLBK0ldUQbFrKQSS6dh4T4
          claim_id: c_meue216oGnGH1UcBqOcjQh
          source_id: s_p4Jc8LB9YB3bScFAx3zcwL
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4GbPExDFna3bpZBzyQEK5D
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑶，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302968） | accepted |
| name.primary | 王瑶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ptMfEt1rAT4WiPXRdKXa9c | 王馨 | accepted |
| children | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |
| children | p_4GbPExDFna3bpZBzyQEK5D | 王崇古 | accepted |

## 外部来源

- [维基数据：王崇古（Q15934835）](https://www.wikidata.org/wiki/Q15934835)
- [维基数据：王馨（Q45626817）](https://www.wikidata.org/wiki/Q45626817)
- [维基数据：王瑶（Q45626878）](https://www.wikidata.org/wiki/Q45626878)
- [CBDB 中国历代人物传记资料库：王瑤（302968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302968&o=json)
