---
schema: wang-person/v1
id: p_CrYhBqZZ3D8DBHyd9AsvWX
status: active
merged_into: null
display_name: 王道行
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RRkVWhBNA5pmpNmKct1RHz
        subject_person_id: p_CrYhBqZZ3D8DBHyd9AsvWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQSb57aiWSQ8WHApg8AZ5o
          claim_id: c_RRkVWhBNA5pmpNmKct1RHz
          source_id: s_1wcW4iRx2V3cJ1cQEJ2MtM
          stance: supports
          locator: CBDB:219573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219573）
          source: &a1
            id: s_1wcW4iRx2V3cJ1cQEJ2MtM
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 219573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json
            external_identifier: CBDB:219573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mWSTcE5JQ3GFggaWsHjcAB
        subject_person_id: p_CrYhBqZZ3D8DBHyd9AsvWX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219573）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MxI9OZhmK-v0e9mpm909Hg
          claim_id: c_mWSTcE5JQ3GFggaWsHjcAB
          source_id: s_1wcW4iRx2V3cJ1cQEJ2MtM
          stance: supports
          locator: CBDB:219573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8YtN0r1nHOdpuq85LUyVou
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CrYhBqZZ3D8DBHyd9AsvWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ckre2MJ6phUrotinZADd5B
          claim_id: c_8YtN0r1nHOdpuq85LUyVou
          source_id: s_dhnx3NfsgF23ShozeuseXv
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道行 与 王道增 为同胞（CBDB 记「弟」），王道增 之父／母即 王道行 之父／母。
          source:
            id: s_dhnx3NfsgF23ShozeuseXv
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 219573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json
            external_identifier: CBDB:219573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RYeG6QXC3LvzmPc5LSo3Tt
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hgjuIBPHvmxbhuPHJO-ZCc
        subject_person_id: p_CrYhBqZZ3D8DBHyd9AsvWX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_Y9No7Gv4pj4L1_UDLxNq
          claim_id: c_hgjuIBPHvmxbhuPHJO-ZCc
          source_id: s_dhnx3NfsgF23ShozeuseXv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206547 王道增）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dhnx3NfsgF23ShozeuseXv
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 219573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json
            external_identifier: CBDB:219573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zZbuHXnqm4wRFTtwvCX7hA
        status: active
        display_name: 王道增
        merged_into_person_id: null
---

# 王道行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道行 | accepted |
| bio.summary | 王道行，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYeG6QXC3LvzmPc5LSo3Tt | 王澍 | accepted |
| other | p_zZbuHXnqm4wRFTtwvCX7hA | 王道增 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 219573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219573&o=json)
