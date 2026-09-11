---
schema: wang-person/v1
id: p_pxV3ZUgWPQzCjese46VYwx
status: active
merged_into: null
display_name: 王升童
cbdb_id: 525504
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1pLcGheSpcbbKSWaRceKzt
        subject_person_id: p_pxV3ZUgWPQzCjese46VYwx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升童，元人物。中国历代人物传记资料库（CBDB）以人物编号 525504 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uof27dJzXAktXA1NYN-DGe
          claim_id: c_1pLcGheSpcbbKSWaRceKzt
          source_id: s_P8Y9NHZaoNyQ3ajVKaDKSB
          stance: supports
          locator: CBDB:525504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_P8Y9NHZaoNyQ3ajVKaDKSB
            source_type: api_record
            title: 中国历代人物传记资料库：王升童（CBDB 525504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525504&o=json
            external_identifier: CBDB:525504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A45xe9tixfq1yJKL7zvYSB
        subject_person_id: p_pxV3ZUgWPQzCjese46VYwx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升童
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9n33SZKuCg77ScnBq5D5zz
          claim_id: c_A45xe9tixfq1yJKL7zvYSB
          source_id: s_P8Y9NHZaoNyQ3ajVKaDKSB
          stance: supports
          locator: CBDB:525504
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_P8Y9NHZaoNyQ3ajVKaDKSB
            source_type: api_record
            title: 中国历代人物传记资料库：王升童（CBDB 525504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525504&o=json
            external_identifier: CBDB:525504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xVAtF_JU6Pw3oAOMUxtCkw
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pxV3ZUgWPQzCjese46VYwx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ngrM9lG5KlLUX69cj5CzX
          claim_id: c_xVAtF_JU6Pw3oAOMUxtCkw
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11432：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P3Q2nfqY98LuANECRxE3Jq
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 67796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67796&o=json
            external_identifier: CBDB:67796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王升童

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王升童，元人物。中国历代人物传记资料库（CBDB）以人物编号 525504 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王升童 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A5Zrd3y3GJ1eZYtNj9d2Uq | 王愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 67796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67796&o=json)
- [中国历代人物传记资料库：王升童（CBDB 525504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525504&o=json)
