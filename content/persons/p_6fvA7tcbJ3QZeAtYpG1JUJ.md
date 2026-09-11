---
schema: wang-person/v1
id: p_6fvA7tcbJ3QZeAtYpG1JUJ
status: active
merged_into: null
display_name: 王之臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y95RAX4LJk9SxXLTTfoJsF
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C69mbW7UEBGTWHBvUFR8r7
          claim_id: c_Y95RAX4LJk9SxXLTTfoJsF
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: CBDB:205596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205596）
          source: &a1
            id: s_HcH3xQmb7zb9n2w7Xu1CjS
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 205596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json
            external_identifier: CBDB:205596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZN8Neu8LkFJKVo3TbVcdY1
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXzNSEH5CWxgt5FJ8Md6Kq
          claim_id: c_ZN8Neu8LkFJKVo3TbVcdY1
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSFXZ81EkzWVNjAaEGLR7c
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
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
        - id: cs_DRHye1dEnvz69878cZ6JiU
          claim_id: c_LSFXZ81EkzWVNjAaEGLR7c
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ZYrusuQNlPR9llvgoPLE3
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1kh-CBvkcsPIj-ifrZF5h7
          claim_id: c_3ZYrusuQNlPR9llvgoPLE3
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ymucX7NT8ppRqzhncqq8Wc
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YqYB65PFjJIpZxHbs-hibI
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mj2LC9jfcjqY6LZjHCg57v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaZFdrdAdBT8xdTNUh8eEI
          claim_id: c_YqYB65PFjJIpZxHbs-hibI
          source_id: s_rCGhH2lJbrfoGSlP22dgEz
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rCGhH2lJbrfoGSlP22dgEz
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王之臣妻)（CBDB 335741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335741&o=json
            external_identifier: CBDB:335741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mj2LC9jfcjqY6LZjHCg57v
        status: active
        display_name: 程氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_bhq4rZFoKS3pVaxGwobRn4
        subject_person_id: p_fbjXbDTCEeuchZ6ouaWUGB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMiaq3HXY9Eas5AeEVm7Os
          claim_id: c_bhq4rZFoKS3pVaxGwobRn4
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fbjXbDTCEeuchZ6ouaWUGB
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_1olBEoF0Sxj6rq7VbTRG_t
        subject_person_id: p_W2yKNp1DGJcHNcHpAd1eMS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oIqVZBWbj2b4QYb846hQKe
          claim_id: c_1olBEoF0Sxj6rq7VbTRG_t
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W2yKNp1DGJcHNcHpAd1eMS
        status: active
        display_name: 王杭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| birth.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymucX7NT8ppRqzhncqq8Wc | 王鼎 | accepted |
| spouses | p_mj2LC9jfcjqY6LZjHCg57v | 程氏 | accepted |
| ancestors | p_fbjXbDTCEeuchZ6ouaWUGB | 王義 | accepted |
| ancestors | p_W2yKNp1DGJcHNcHpAd1eMS | 王杭 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王之臣妻)（CBDB 335741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335741&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 205596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json)
