---
schema: wang-person/v1
id: p_jinjX5ADk6G5VsaJoLLwuf
status: active
merged_into: null
display_name: 王良弼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i7tPMYYdKg7B9j8v1EUxsG
        subject_person_id: p_jinjX5ADk6G5VsaJoLLwuf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jxbKZQxPYQW3dJ4KVB5u8T
          claim_id: c_i7tPMYYdKg7B9j8v1EUxsG
          source_id: s_cRXVui8m43mQ2YNoTpBNWA
          stance: supports
          locator: CBDB:266081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266081）
          source: &a1
            id: s_cRXVui8m43mQ2YNoTpBNWA
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 266081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json
            external_identifier: CBDB:266081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2X7q3auUBNBJ264pSWuu7o
        subject_person_id: p_jinjX5ADk6G5VsaJoLLwuf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良弼，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lus4NsL63Eb2Vkty5Ns3BC
          claim_id: c_2X7q3auUBNBJ264pSWuu7o
          source_id: s_cRXVui8m43mQ2YNoTpBNWA
          stance: supports
          locator: CBDB:266081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U9EFH-LSxuo2ZNedbPI7rg
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jinjX5ADk6G5VsaJoLLwuf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aeEpcMuBWMObh0kImKU50F
          claim_id: c_U9EFH-LSxuo2ZNedbPI7rg
          source_id: s_QyNtJStvTDg-C-qEySyT3i
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良弼 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良弼 之父／母。
          source:
            id: s_QyNtJStvTDg-C-qEySyT3i
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 266081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json
            external_identifier: CBDB:266081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzCu3N2C5U3pdrCETHd45i
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KyP8kLfVZzsg07k1VIvc5c
        subject_person_id: p_i98FVCHxFpmHEPq1xWByi6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jinjX5ADk6G5VsaJoLLwuf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6CpxVlx8PC2gcl2yUAntLn
          claim_id: c_KyP8kLfVZzsg07k1VIvc5c
          source_id: s_QyNtJStvTDg-C-qEySyT3i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126528 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QyNtJStvTDg-C-qEySyT3i
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 266081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json
            external_identifier: CBDB:266081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王良弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良弼 | accepted |
| bio.summary | 王良弼，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LzCu3N2C5U3pdrCETHd45i | 王璋 | accepted |
| other | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良弼（CBDB 266081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266081&o=json)
