---
schema: wang-person/v1
id: p_D5yc5v9doFe6EGBnJc6QNN
status: active
merged_into: null
display_name: 王季羽
cbdb_id: 175509
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHkjEbU8E5eoWYV7rAeBVU
        subject_person_id: p_D5yc5v9doFe6EGBnJc6QNN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季羽（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175509）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zjxphWsPNt5dDFiRp94CSx
          claim_id: c_wHkjEbU8E5eoWYV7rAeBVU
          source_id: s_iiqGQPdewcNCf2mDWzcGVH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iiqGQPdewcNCf2mDWzcGVH
            source_type: api_record
            title: 维基数据：王季羽（Q45663828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663828
            external_identifier: Q45663828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_9BB3RWFDS3X3b8s2cQcIdA
          claim_id: c_wHkjEbU8E5eoWYV7rAeBVU
          source_id: s_ZA5dZRH1jbK5oABX9FbwGp
          stance: supports
          locator: CBDB:175509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZA5dZRH1jbK5oABX9FbwGp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王季羽（175509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175509&o=json
            external_identifier: CBDB:175509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.214Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L9vSkVaCuaPbbNhGUJSFCw
        subject_person_id: p_D5yc5v9doFe6EGBnJc6QNN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DsLiaZrb6NWknf54aBPLoY
          claim_id: c_L9vSkVaCuaPbbNhGUJSFCw
          source_id: s_iiqGQPdewcNCf2mDWzcGVH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iiqGQPdewcNCf2mDWzcGVH
            source_type: api_record
            title: 维基数据：王季羽（Q45663828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663828
            external_identifier: Q45663828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AfKW47rkk3JW7JcMka49zV
        subject_person_id: p_D5yc5v9doFe6EGBnJc6QNN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季羽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XBPFZTLv3o1gx4YPQQ7LXq
          claim_id: c_AfKW47rkk3JW7JcMka49zV
          source_id: s_ZA5dZRH1jbK5oABX9FbwGp
          stance: supports
          locator: Q45663828
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_bvZvwUrGftue6jnHQcHxz7
          claim_id: c_AfKW47rkk3JW7JcMka49zV
          source_id: s_iiqGQPdewcNCf2mDWzcGVH
          stance: supports
          locator: Q45663828
          quotation: null
          interpretation_note: null
          source:
            id: s_iiqGQPdewcNCf2mDWzcGVH
            source_type: api_record
            title: 维基数据：王季羽（Q45663828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663828
            external_identifier: Q45663828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MvFN9vi5tQwGHseqzSLBud
        subject_person_id: p_cMP48zNTZu9hmEiLSZK3dy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5yc5v9doFe6EGBnJc6QNN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4Pf8DUoCHmqumRjnJ8nAYo
          claim_id: c_MvFN9vi5tQwGHseqzSLBud
          source_id: s_HQtUQ93LQeWQb8PyLXUbNd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HQtUQ93LQeWQb8PyLXUbNd
            source_type: api_record
            title: 维基数据：王适（Q45663771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663771
            external_identifier: Q45663771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_cGCjNnbFtxbwmqdj3AQH26
          claim_id: c_MvFN9vi5tQwGHseqzSLBud
          source_id: s_3AzCjB5PSEHghoX7NKvwn2
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3AzCjB5PSEHghoX7NKvwn2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王適（175508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175508&o=json
            external_identifier: CBDB:175508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.281Z
            metadata_json: null
        - id: cs_zgrye2jVh1QLYLf3nWMgmP
          claim_id: c_MvFN9vi5tQwGHseqzSLBud
          source_id: s_iiqGQPdewcNCf2mDWzcGVH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iiqGQPdewcNCf2mDWzcGVH
            source_type: api_record
            title: 维基数据：王季羽（Q45663828）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663828
            external_identifier: Q45663828
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_M41QHDa43Ei1a59o3fKuot
          claim_id: c_MvFN9vi5tQwGHseqzSLBud
          source_id: s_ZA5dZRH1jbK5oABX9FbwGp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZA5dZRH1jbK5oABX9FbwGp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王季羽（175509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175509&o=json
            external_identifier: CBDB:175509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.214Z
            metadata_json: null
      object_person:
        id: p_cMP48zNTZu9hmEiLSZK3dy
        status: active
        display_name: 王适
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季羽（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175509） | accepted |
| death.date | 875年 | accepted |
| name.primary | 王季羽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cMP48zNTZu9hmEiLSZK3dy | 王适 | accepted |

## 外部来源

- [维基数据：王季羽（Q45663828）](https://www.wikidata.org/wiki/Q45663828)
- [维基数据：王适（Q45663771）](https://www.wikidata.org/wiki/Q45663771)
- [CBDB 中国历代人物传记资料库：王季羽（175509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175509&o=json)
- [CBDB 中国历代人物传记资料库：王適（175508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175508&o=json)
