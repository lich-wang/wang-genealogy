---
schema: wang-person/v1
id: p_24MCLxi9vqWot9y9ra6B3D
status: active
merged_into: null
display_name: 王紘
cbdb_id: 175836
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kkfryAr9yheSD8VjQa2Fe5
        subject_person_id: p_24MCLxi9vqWot9y9ra6B3D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘（卒于759年），唐人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 175836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_JpZm97uuRcdPp6W2UhJNF6
          claim_id: c_kkfryAr9yheSD8VjQa2Fe5
          source_id: s_ybYZg4ALk3JsmGMMzw4d1a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ybYZg4ALk3JsmGMMzw4d1a
            source_type: api_record
            title: 维基数据：王紘（Q45677344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677344
            external_identifier: Q45677344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:13.956Z
            metadata_json: null
        - id: cs_h5GD8N5CKofUb61FucEJaB
          claim_id: c_kkfryAr9yheSD8VjQa2Fe5
          source_id: s_BKWrMJ4qEdwhmHGXMn7wDe
          stance: supports
          locator: CBDB:175836
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BKWrMJ4qEdwhmHGXMn7wDe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紘（175836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175836&o=json
            external_identifier: CBDB:175836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:14.089Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8PBNKL9VyNx8Gg8KPERDJy
        subject_person_id: p_24MCLxi9vqWot9y9ra6B3D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0759-01-01
            latest: 0759-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1NMNaqTk1W74eYLAC9g9Cw
          claim_id: c_8PBNKL9VyNx8Gg8KPERDJy
          source_id: s_ybYZg4ALk3JsmGMMzw4d1a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ybYZg4ALk3JsmGMMzw4d1a
            source_type: api_record
            title: 维基数据：王紘（Q45677344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677344
            external_identifier: Q45677344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:13.956Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tVBuT3Z5vSA3xdpny46adB
        subject_person_id: p_24MCLxi9vqWot9y9ra6B3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KjugfGyXq88Rjfn8tzYBFT
          claim_id: c_tVBuT3Z5vSA3xdpny46adB
          source_id: s_ybYZg4ALk3JsmGMMzw4d1a
          stance: supports
          locator: Q45677344
          quotation: null
          interpretation_note: null
          source:
            id: s_ybYZg4ALk3JsmGMMzw4d1a
            source_type: api_record
            title: 维基数据：王紘（Q45677344）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677344
            external_identifier: Q45677344
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:13.956Z
            metadata_json: null
        - id: cs_qdgXUL9rE8nPc82GzJfpjK
          claim_id: c_tVBuT3Z5vSA3xdpny46adB
          source_id: s_BKWrMJ4qEdwhmHGXMn7wDe
          stance: supports
          locator: Q45677344
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6riyjBDRgDzr22aAwQDUS5
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_24MCLxi9vqWot9y9ra6B3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DSxmLNMt43FjNqomjzEWAH
          claim_id: c_6riyjBDRgDzr22aAwQDUS5
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
    - claim:
        id: c_785_ode5cBk68qponeySu7
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_24MCLxi9vqWot9y9ra6B3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBk1wDfyJPIlAKlIt7-cdH
          claim_id: c_785_ode5cBk68qponeySu7
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S3QZnAK5T62oAi1ZixcCai
            source_type: api_record
            title: 中国历代人物传记资料库：王處廉（CBDB 32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S4N2Cev8cRhe7jcPfNaRgM
        status: active
        display_name: 王處廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紘（卒于759年），唐人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 175836） | accepted |
| death.date | 759年 | accepted |
| name.primary | 王紘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |
| parents | p_S4N2Cev8cRhe7jcPfNaRgM | 王處廉 | accepted |

## 外部来源

- [维基数据：王紘（Q45677344）](https://www.wikidata.org/wiki/Q45677344)
- [中国历代人物传记资料库：王處廉（CBDB 32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王紘（175836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175836&o=json)
