---
schema: wang-person/v1
id: p_FQJ8PdpfMANeNs6vjg8SeR
status: active
merged_into: null
display_name: 王瑜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CfxFDEs3LopW7bXAGy2gai
        subject_person_id: p_FQJ8PdpfMANeNs6vjg8SeR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hV1H8dwnmxkE2tYtFjMV3i
          claim_id: c_CfxFDEs3LopW7bXAGy2gai
          source_id: s_GcJN3rJJu83BLPV4CdnZoa
          stance: supports
          locator: CBDB:296990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296990）
          source: &a1
            id: s_GcJN3rJJu83BLPV4CdnZoa
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 296990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296990&o=json
            external_identifier: CBDB:296990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bguc9d6pD2mJyahnyPPBAP
        subject_person_id: p_FQJ8PdpfMANeNs6vjg8SeR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 296990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W-ethg0JYE03VkI7G1vAyV
          claim_id: c_bguc9d6pD2mJyahnyPPBAP
          source_id: s_GcJN3rJJu83BLPV4CdnZoa
          stance: supports
          locator: CBDB:296990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kvkCihoZUB2VljriZFKda2
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FQJ8PdpfMANeNs6vjg8SeR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rRphAUq8y4IWzpoJ4kBcVL
          claim_id: c_kvkCihoZUB2VljriZFKda2
          source_id: s_trZ4greqOPCCVFTlctWRGB
          stance: supports
          locator: CBDB：兄弟 王琳（198163）之父／母 王德威
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑜 与 王琳 为同胞（CBDB 记「兄」），王琳 之父／母即 王瑜 之父／母。
          source:
            id: s_trZ4greqOPCCVFTlctWRGB
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 296990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296990&o=json
            external_identifier: CBDB:296990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8yYQA2hfedBaXHUn1hFL3
        status: active
        display_name: 王德威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uzaIT7pPvTGM2c-LdSxqCe
        subject_person_id: p_FQJ8PdpfMANeNs6vjg8SeR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D93kfVSrUtWe2f7tbZn_01
          claim_id: c_uzaIT7pPvTGM2c-LdSxqCe
          source_id: s_trZ4greqOPCCVFTlctWRGB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198163 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_trZ4greqOPCCVFTlctWRGB
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 296990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296990&o=json
            external_identifier: CBDB:296990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Va27aZRgdi5W8FWJiWP4zt
        status: active
        display_name: 王琳
        merged_into_person_id: null
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 296990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y8yYQA2hfedBaXHUn1hFL3 | 王德威 | accepted |
| other | p_Va27aZRgdi5W8FWJiWP4zt | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 296990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296990&o=json)
