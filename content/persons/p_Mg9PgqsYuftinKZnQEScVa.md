---
schema: wang-person/v1
id: p_Mg9PgqsYuftinKZnQEScVa
status: active
merged_into: null
display_name: 王友賢
cbdb_id: 204802
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PCZQkXfqtNVcjKxWTpt7Dx
        subject_person_id: p_Mg9PgqsYuftinKZnQEScVa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友賢（生于1526年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204802 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_svCyKoAqzuoBL-f9ab3MLW
          claim_id: c_PCZQkXfqtNVcjKxWTpt7Dx
          source_id: s_6oZadJwH7kcNnyc28sh7cX
          stance: supports
          locator: CBDB:204802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_6oZadJwH7kcNnyc28sh7cX
            source_type: api_record
            title: 中国历代人物传记资料库：王友賢（CBDB 204802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204802&o=json
            external_identifier: CBDB:204802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x3QvqjQ25mNKox34mD3dxP
        subject_person_id: p_Mg9PgqsYuftinKZnQEScVa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1526-01-01
            latest: 1526-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P27weJvkjrNWtCQnR549fH
          claim_id: c_x3QvqjQ25mNKox34mD3dxP
          source_id: s_6oZadJwH7kcNnyc28sh7cX
          stance: supports
          locator: CBDB:204802
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_6oZadJwH7kcNnyc28sh7cX
            source_type: api_record
            title: 中国历代人物传记资料库：王友賢（CBDB 204802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204802&o=json
            external_identifier: CBDB:204802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H3SHrof2UfdRYboDjLJohd
        subject_person_id: p_Mg9PgqsYuftinKZnQEScVa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3mXSCqSqNXMt1y4xCL4Ypg
          claim_id: c_H3SHrof2UfdRYboDjLJohd
          source_id: s_6oZadJwH7kcNnyc28sh7cX
          stance: supports
          locator: CBDB:204802
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_6oZadJwH7kcNnyc28sh7cX
            source_type: api_record
            title: 中国历代人物传记资料库：王友賢（CBDB 204802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204802&o=json
            external_identifier: CBDB:204802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s6_Dy3mE0kUZ8ICp_IOnu9
        subject_person_id: p_EKeKWW2myZz4rE9rrMpRQP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mg9PgqsYuftinKZnQEScVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQtv4pqyZd7N6G6V8G-WBO
          claim_id: c_s6_Dy3mE0kUZ8ICp_IOnu9
          source_id: s_hyGDgWbazMBVGxB8stGE4A
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hyGDgWbazMBVGxB8stGE4A
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 324287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324287&o=json
            external_identifier: CBDB:324287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EKeKWW2myZz4rE9rrMpRQP
        status: active
        display_name: 王用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友賢（生于1526年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204802 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1526年 | accepted |
| name.primary | 王友賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EKeKWW2myZz4rE9rrMpRQP | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 324287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324287&o=json)
- [中国历代人物传记资料库：王友賢（CBDB 204802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204802&o=json)
