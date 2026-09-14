---
schema: wang-person/v1
id: p_CoMtV9xq2X5pH1y41LjC86
status: active
merged_into: null
display_name: 王瓊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BE22PTYfGBFbAYobaEqANC
        subject_person_id: p_CoMtV9xq2X5pH1y41LjC86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rKrCiWAcy79ptQAMEacQo
          claim_id: c_BE22PTYfGBFbAYobaEqANC
          source_id: s_w8qVRYy285AmBhk2wMriUC
          stance: supports
          locator: CBDB:290017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290017）
          source: &a1
            id: s_w8qVRYy285AmBhk2wMriUC
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 290017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json
            external_identifier: CBDB:290017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KpEREZxDzGEHsZM9sjt5HU
        subject_person_id: p_CoMtV9xq2X5pH1y41LjC86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wSJEkFIymjI_oFpFgjlOli
          claim_id: c_KpEREZxDzGEHsZM9sjt5HU
          source_id: s_w8qVRYy285AmBhk2wMriUC
          stance: supports
          locator: CBDB:290017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rd_9S8Jr6QZWuHEKd9XL9s
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CoMtV9xq2X5pH1y41LjC86
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afpre7lx4k7Acj7UPVi1-e
          claim_id: c_Rd_9S8Jr6QZWuHEKd9XL9s
          source_id: s_0H_tCdT1Zmredb0Jk2qtew
          stance: supports
          locator: CBDB：兄弟 王璣（126823）之父／母 王文暉
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王璣 为同胞（CBDB 记「弟」），王璣 之父／母即 王瓊 之父／母。
          source:
            id: s_0H_tCdT1Zmredb0Jk2qtew
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 290017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json
            external_identifier: CBDB:290017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oLGH5VdAkbTAKw9xdBWvfS
        status: active
        display_name: 王文暉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Lj92UpbSVY8Cf-yMsAp430
        subject_person_id: p_CoMtV9xq2X5pH1y41LjC86
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p3WhREWmhls03LLLLZZw9p
          claim_id: c_Lj92UpbSVY8Cf-yMsAp430
          source_id: s_0H_tCdT1Zmredb0Jk2qtew
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126823 王璣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0H_tCdT1Zmredb0Jk2qtew
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 290017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json
            external_identifier: CBDB:290017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EsRDyFvEK3YaUwwwR2A4xp
        status: active
        display_name: 王璣
        merged_into_person_id: null
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。嘉靖八年進士，籍贯西安。（中国历代人物传记资料库 CBDB 290017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLGH5VdAkbTAKw9xdBWvfS | 王文暉 | accepted |
| other | p_EsRDyFvEK3YaUwwwR2A4xp | 王璣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 290017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json)
