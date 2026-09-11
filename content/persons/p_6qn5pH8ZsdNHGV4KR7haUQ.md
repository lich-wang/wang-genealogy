---
schema: wang-person/v1
id: p_6qn5pH8ZsdNHGV4KR7haUQ
status: active
merged_into: null
display_name: 王楫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XM17Sj8X9De6JLbTRmzC8x
        subject_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yUbKpNFSnoPpYMqasNCuny
          claim_id: c_XM17Sj8X9De6JLbTRmzC8x
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: CBDB:199876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199876）
          source: &a1
            id: s_4nhiP9s1yMStRe39TKXhcx
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 199876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199876&o=json
            external_identifier: CBDB:199876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Py2JNa5wK4ftqa2JPGgVCe
        subject_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BgX8a2FZxQVnKwESa8onb
          claim_id: c_Py2JNa5wK4ftqa2JPGgVCe
          source_id: s_4nhiP9s1yMStRe39TKXhcx
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
        id: c_JL8HsRW7nBQLCmaU8jnPom
        subject_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫（生于1446年），明人物。成化十四年進士，籍贯虹縣，入仕進士。（中国历代人物传记资料库 CBDB 199876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EjGxxqJoIm_uWkCT12C_Sj
          claim_id: c_JL8HsRW7nBQLCmaU8jnPom
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: CBDB:199876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d1wGOoVKfqc_bwX7myk5X-
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lkfQPI6sfNGj5sLBJmI_YD
          claim_id: c_d1wGOoVKfqc_bwX7myk5X-
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EMHJfmp35NiNjZCUBv8fjK
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Tug6NPnDj5QKxNLkJkoC7v
        subject_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2bXQnXMpJ1M2gFgVAinKc9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S2ZfTnPuTnMtXLXgTS7lxX
          claim_id: c_Tug6NPnDj5QKxNLkJkoC7v
          source_id: s_ey6WF-xdB5eoQddldr9WiA
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ey6WF-xdB5eoQddldr9WiA
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王楫妻)（CBDB 250839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250839&o=json
            external_identifier: CBDB:250839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2bXQnXMpJ1M2gFgVAinKc9
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_E-RwGibhVavhBRfmlhHKC6
        subject_person_id: p_G3DTDFRp7rB1fxXrvPzkYn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vel1kQmpwVcyAJAzRn9e7z
          claim_id: c_E-RwGibhVavhBRfmlhHKC6
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G3DTDFRp7rB1fxXrvPzkYn
        status: active
        display_name: 王好仁
        merged_into_person_id: null
    - claim:
        id: c_HHvcfH_LwgvUnDGKl9qL9n
        subject_person_id: p_ZkRDExQ94Hd2C1M1HcPq39
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfmpgToEzMTiAKfQ6clc2X
          claim_id: c_HHvcfH_LwgvUnDGKl9qL9n
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZkRDExQ94Hd2C1M1HcPq39
        status: active
        display_name: 王俊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | 王楫（生于1446年），明人物。成化十四年進士，籍贯虹縣，入仕進士。（中国历代人物传记资料库 CBDB 199876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMHJfmp35NiNjZCUBv8fjK | 王斌 | accepted |
| spouses | p_2bXQnXMpJ1M2gFgVAinKc9 | 魏氏 | accepted |
| ancestors | p_G3DTDFRp7rB1fxXrvPzkYn | 王好仁 | accepted |
| ancestors | p_ZkRDExQ94Hd2C1M1HcPq39 | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 199876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199876&o=json)
- [中国历代人物传记资料库：魏氏(王楫妻)（CBDB 250839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250839&o=json)
