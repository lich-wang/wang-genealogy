---
schema: wang-person/v1
id: p_G5stHnMK82gdFnbGia9fRP
status: active
merged_into: null
display_name: 王宗河
cbdb_id: 278555
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rzRizbiK74WTnuZRA1hZ8V
        subject_person_id: p_G5stHnMK82gdFnbGia9fRP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗河，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YNzv8o8-Oej_9ih40FckK3
          claim_id: c_rzRizbiK74WTnuZRA1hZ8V
          source_id: s_jMjuS6BKG8Hgn81fUp2HAv
          stance: supports
          locator: CBDB:278555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jMjuS6BKG8Hgn81fUp2HAv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗河（CBDB 278555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json
            external_identifier: CBDB:278555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gWuzMmohv1PoW3kh2fu35q
        subject_person_id: p_G5stHnMK82gdFnbGia9fRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗河
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PeDW8FLsP77X1ykbAnVQ5W
          claim_id: c_gWuzMmohv1PoW3kh2fu35q
          source_id: s_jMjuS6BKG8Hgn81fUp2HAv
          stance: supports
          locator: CBDB:278555
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KSbxHX_ykvXa-j3vw7jwnR
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5stHnMK82gdFnbGia9fRP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iMAOo_Y31oV6cn3AFzKk42
          claim_id: c_KSbxHX_ykvXa-j3vw7jwnR
          source_id: s_CCQCs1MfxWa9wRFZlgvuoo
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗河 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗河 之父／母。
          source:
            id: s_CCQCs1MfxWa9wRFZlgvuoo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗河（CBDB 278555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json
            external_identifier: CBDB:278555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_p6-C6-RQAfeDrl6vnj_1R1
        subject_person_id: p_G5stHnMK82gdFnbGia9fRP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7ZFLBTRJST3knHpPvB_DZ
          claim_id: c_p6-C6-RQAfeDrl6vnj_1R1
          source_id: s_CCQCs1MfxWa9wRFZlgvuoo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CCQCs1MfxWa9wRFZlgvuoo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗河（CBDB 278555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json
            external_identifier: CBDB:278555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王宗河

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗河，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278555） | accepted |
| name.primary | 王宗河 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗河（CBDB 278555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278555&o=json)
