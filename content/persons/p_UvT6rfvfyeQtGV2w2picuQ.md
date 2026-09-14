---
schema: wang-person/v1
id: p_UvT6rfvfyeQtGV2w2picuQ
status: active
merged_into: null
display_name: 王勮
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNeKdANzn61p4LeJycBjC6
        subject_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7YHk82gfXU376yVnckuG1
          claim_id: c_XNeKdANzn61p4LeJycBjC6
          source_id: s_Nf2kuc8cjUDhzPvNS21HiT
          stance: supports
          locator: CBDB:92110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92110）
          source: &a1
            id: s_Nf2kuc8cjUDhzPvNS21HiT
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HuWt6TLCNYJN3ifP7ACJ2F
        subject_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 697年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQJgwjnWPr59kx5VErrB8B
          claim_id: c_HuWt6TLCNYJN3ifP7ACJ2F
          source_id: s_Nf2kuc8cjUDhzPvNS21HiT
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
        id: c_i1WyR1TYhbwHvvrZ3oWzyE
        subject_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勮（卒于697年），五代人物。籍贯龍門，入仕進士，曾任鳳閣舍人、弘文館學士、太子典膳丞。（中国历代人物传记资料库 CBDB 92110）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vT4r_zccPod70rfeDfoP6Z
          claim_id: c_i1WyR1TYhbwHvvrZ3oWzyE
          source_id: s_Nf2kuc8cjUDhzPvNS21HiT
          stance: supports
          locator: CBDB:92110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tHwFh-C_jRJu5nS4CvMuwd
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNnGu0F1i7PA3fVDx_Zlli
          claim_id: c_tHwFh-C_jRJu5nS4CvMuwd
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB：兄弟 王勃（30982）之父／母 王福畤
          quotation: null
          interpretation_note: 由兄弟关系推断：王勮 与 王勃 为同胞（CBDB 记「弟」），王勃 之父／母即 王勮 之父／母。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fCpXRw3ympYVRWdSX3T5cq
        status: active
        display_name: 王福畤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5JkkNcGe9QI3qevy1rVbek
        subject_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uYDH5QbPuGyPSbDEXdTRFx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al7SAgQDzB6gsHbFOp2a1W
          claim_id: c_5JkkNcGe9QI3qevy1rVbek
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 92074 王勔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uYDH5QbPuGyPSbDEXdTRFx
        status: active
        display_name: 王勔
        merged_into_person_id: null
    - claim:
        id: c_oYVEOanPhtKTf3KgcPDE76
        subject_person_id: p_3rXpgVa7b3w2KvtV9muyJp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5syW6ATwtqeiOKA4so336
          claim_id: c_oYVEOanPhtKTf3KgcPDE76
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 30982 王勃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3rXpgVa7b3w2KvtV9muyJp
        status: active
        display_name: 王勃
        merged_into_person_id: null
    - claim:
        id: c_i2okTFD0JCP3kLRR7ddglh
        subject_person_id: p_1HFrXhR5k8Wh7RX7Cyq9Qe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ISMfm0GWaTzzJbG8bVgTJU
          claim_id: c_i2okTFD0JCP3kLRR7ddglh
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 91979 王助）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1HFrXhR5k8Wh7RX7Cyq9Qe
        status: active
        display_name: 王助
        merged_into_person_id: null
---

# 王勮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勮 | accepted |
| death.date | 697年 | accepted |
| bio.summary | 王勮（卒于697年），五代人物。籍贯龍門，入仕進士，曾任鳳閣舍人、弘文館學士、太子典膳丞。（中国历代人物传记资料库 CBDB 92110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fCpXRw3ympYVRWdSX3T5cq | 王福畤 | accepted |
| other | p_uYDH5QbPuGyPSbDEXdTRFx | 王勔 | accepted |
| other | p_3rXpgVa7b3w2KvtV9muyJp | 王勃 | accepted |
| other | p_1HFrXhR5k8Wh7RX7Cyq9Qe | 王助 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勮（CBDB 92110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json)
