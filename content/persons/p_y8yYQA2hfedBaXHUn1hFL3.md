---
schema: wang-person/v1
id: p_y8yYQA2hfedBaXHUn1hFL3
status: active
merged_into: null
display_name: 王德威
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Msg3TH3R5KW4exu5MBkCn8
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2GwC7Pbcips9LBbS1KsL7P
          claim_id: c_Msg3TH3R5KW4exu5MBkCn8
          source_id: s_79wuJRt3cz7jDv4VkzKRTU
          stance: supports
          locator: CBDB:296656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296656）
          source: &a1
            id: s_79wuJRt3cz7jDv4VkzKRTU
            source_type: api_record
            title: 中国历代人物传记资料库：王德威（CBDB 296656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296656&o=json
            external_identifier: CBDB:296656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d8Hm8AbbP64KD2jNbgNGJM
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德威，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 296656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MjIeuQ-fo3DqFJX5sZoSNF
          claim_id: c_d8Hm8AbbP64KD2jNbgNGJM
          source_id: s_79wuJRt3cz7jDv4VkzKRTU
          stance: supports
          locator: CBDB:296656
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-s1lnKOeL94hnC2mm4wsJB
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPJVd1jVzW3xuDG82BJ0ie
          claim_id: c_-s1lnKOeL94hnC2mm4wsJB
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hRCDgLQBmdUDEyE1cofkQA
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 198163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json
            external_identifier: CBDB:198163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Va27aZRgdi5W8FWJiWP4zt
        status: active
        display_name: 王琳
        merged_into_person_id: null
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
        id: p_FQJ8PdpfMANeNs6vjg8SeR
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_eJlb-Jeg1jN2O_SKIinYcU
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8Arj3qFtnirsaUN6rAtAH
          claim_id: c_eJlb-Jeg1jN2O_SKIinYcU
          source_id: s_oIPBHCmnI0cBcNOBMuAYJq
          stance: supports
          locator: CBDB：兄弟 王琳（198163）之父／母 王德威
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王琳 为同胞（CBDB 记「兄」），王琳 之父／母即 王璉 之父／母。
          source:
            id: s_oIPBHCmnI0cBcNOBMuAYJq
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 297101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json
            external_identifier: CBDB:297101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e7M8RKTrVfqAUJQg5RFuLs
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德威 | accepted |
| bio.summary | 王德威，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 296656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Va27aZRgdi5W8FWJiWP4zt | 王琳 | accepted |
| children | p_FQJ8PdpfMANeNs6vjg8SeR | 王瑜 | accepted |
| children | p_e7M8RKTrVfqAUJQg5RFuLs | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德威（CBDB 296656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296656&o=json)
- [中国历代人物传记资料库：王璉（CBDB 297101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json)
- [中国历代人物传记资料库：王琳（CBDB 198163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 296990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296990&o=json)
