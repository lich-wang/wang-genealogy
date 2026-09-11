---
schema: wang-person/v1
id: p_yt7BTSHcHKsWozExAQWe78
status: active
merged_into: null
display_name: 王純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_25NfH1oxCrAjVX7ZpugxRh
        subject_person_id: p_yt7BTSHcHKsWozExAQWe78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vMG6ggtYi35w2g84tqi4m
          claim_id: c_25NfH1oxCrAjVX7ZpugxRh
          source_id: s_meJXB7joPkNKNK9ktUu4nK
          stance: supports
          locator: CBDB:126658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126658）
          source: &a1
            id: s_meJXB7joPkNKNK9ktUu4nK
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 126658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126658&o=json
            external_identifier: CBDB:126658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HvU7XdotGQEN8QjWzveX3V
        subject_person_id: p_yt7BTSHcHKsWozExAQWe78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5vJS2DAtgeD1zwVmXCdPx
          claim_id: c_HvU7XdotGQEN8QjWzveX3V
          source_id: s_meJXB7joPkNKNK9ktUu4nK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eOFnPLu7Qqmm_WXKi-U9wD
        subject_person_id: p_nxBo2SnEXoxZTjrPEbFJoT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqxaS63PULWhb61v-Cvk2x
          claim_id: c_eOFnPLu7Qqmm_WXKi-U9wD
          source_id: s_nf4QH3omi5jRaC64rKVCDw
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nf4QH3omi5jRaC64rKVCDw
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 264715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264715&o=json
            external_identifier: CBDB:264715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nxBo2SnEXoxZTjrPEbFJoT
        status: active
        display_name: 王潛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_nxBo2SnEXoxZTjrPEbFJoT | 王潛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 126658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126658&o=json)
- [中国历代人物传记资料库：王潛（CBDB 264715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264715&o=json)
